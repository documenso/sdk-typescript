#!/usr/bin/env node
// Wire-level equivalence test: drives every operation of the Speakeasy SDK and
// the Forge SDK against the same local mock server with the same input, then
// diffs (1) the HTTP request each SDK put on the wire and (2) the value each SDK
// handed back to the caller. Also probes error, retry and download behaviour.
//
// Usage: node compare/wire-compare.mjs <speakeasy-dist> <forge-dist> <openapi.json> <surface.json> [report.json]
import { createServer } from 'node:http';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { isDeepStrictEqual } from 'node:util';

// Speakeasy memoizes process.env on first use, so set this before anything runs.
// Explicit `apiKey` options below take precedence over it.
process.env.DOCUMENSO_API_KEY = 'api_from_env';

const [speakeasyDist, forgeDist, specPath, surfacePath, reportPath] = process.argv.slice(2);
const spec = JSON.parse(readFileSync(specPath, 'utf8'));
const surface = JSON.parse(readFileSync(surfacePath, 'utf8'));
const { Documenso } = await import(pathToFileURL(resolve(speakeasyDist, 'index.js')).href);
const { DocumensoClient } = await import(pathToFileURL(resolve(forgeDist, 'index.js')).href);

// ---------------------------------------------------------------- samples ---
const FIXED_DATE = '2025-01-02T03:04:05.000Z';
const resolveRef = (s) => {
  let cur = s;
  const seen = new Set();
  while (cur && cur.$ref) {
    if (seen.has(cur.$ref)) return {};
    seen.add(cur.$ref);
    cur = cur.$ref.slice(2).split('/').reduce((o, k) => o[k.replaceAll('~1', '/').replaceAll('~0', '~')], spec);
  }
  return cur ?? {};
};

const isPlain = (v) => v && typeof v === 'object' && !Array.isArray(v) && !(v instanceof Date);
const deepMerge = (a, b) => {
  // Earlier allOf members win for leaf values so oneOf discriminants stay consistent.
  if (!isPlain(a) || !isPlain(b)) return a === undefined ? b : a;
  const out = { ...a };
  for (const [k, v] of Object.entries(b)) out[k] = k in out ? deepMerge(out[k], v) : v;
  return out;
};

/** Deterministic sample for a schema. mode "request" uses Date objects for date-time. */
function sample(schema, mode, depth = 0) {
  const s = resolveRef(schema);
  if (depth > 16) return undefined;
  if (s.const !== undefined) return s.const;
  if (s.example !== undefined && typeof s.example !== 'object' && !s.enum && s.format !== 'date-time') return s.example;
  if (s.enum) return s.enum.find((v) => v !== null) ?? null;
  if (s.allOf) return s.allOf.map((x) => sample(x, mode, depth + 1)).reduce(deepMerge, {});
  const alt = s.anyOf ?? s.oneOf;
  if (alt) {
    const nonNull = alt.map(resolveRef).filter((x) => x.type !== 'null' && !(x.enum && x.enum.length === 1 && x.enum[0] === null));
    return sample(nonNull[0] ?? alt[0], mode, depth + 1);
  }
  const type = Array.isArray(s.type) ? s.type.find((t) => t !== 'null') : s.type;
  switch (type ?? (s.properties ? 'object' : undefined)) {
    case 'object': {
      const out = {};
      for (const [k, v] of Object.entries(s.properties ?? {})) {
        const val = sample(v, mode, depth + 1);
        if (val !== undefined) out[k] = val;
      }
      if (!s.properties && s.additionalProperties && typeof s.additionalProperties === 'object') {
        out.key = sample(s.additionalProperties, mode, depth + 1);
      }
      return out;
    }
    case 'array': {
      const item = sample(s.items ?? {}, mode, depth + 1);
      return item === undefined ? [] : [item];
    }
    case 'integer':
      return Math.max(1, s.minimum ?? 1);
    case 'number':
      return Math.max(1.5, s.minimum ?? 1.5);
    case 'boolean':
      return true;
    case 'string':
      if (s.format === 'date-time') return mode === 'request' ? new Date(FIXED_DATE) : FIXED_DATE;
      if (s.format === 'email') return 'user@example.com';
      if (s.format === 'uri' || s.format === 'url') return 'https://example.com/x';
      if (s.format === 'binary') return undefined;
      return 'x'.repeat(Math.max(s.minLength ?? 0, 6)).slice(0, s.maxLength ?? 64);
    default:
      return mode === 'request' ? undefined : 'any';
  }
}

const operations = new Map();
for (const [path, item] of Object.entries(spec.paths)) {
  for (const [method, op] of Object.entries(item)) {
    if (op?.operationId) operations.set(op.operationId, { path, method, op });
  }
}

function buildInputs(entry) {
  const { op } = entry;
  const params = {};
  for (const p of op.parameters ?? []) {
    const v = sample(p.schema, 'request');
    if (v !== undefined) params[p.name] = v;
  }
  const content = op.requestBody?.content ?? {};
  let body;
  let speakeasyBody;
  let multipart = false;
  if (content['application/json']) body = sample(content['application/json'].schema, 'request');
  if (content['multipart/form-data']) {
    multipart = true;
    const schema = resolveRef(content['multipart/form-data'].schema);
    body = {};
    speakeasyBody = {};
    const bytes = () => new Uint8Array([37, 80, 68, 70, 45]);
    const forgeFile = () => new File([bytes()], 'doc.pdf', { type: 'application/pdf' });
    const speakeasyFile = () => ({ fileName: 'doc.pdf', content: bytes() });
    for (const [k, v] of Object.entries(schema.properties ?? {})) {
      const r = resolveRef(v);
      if (r.type === 'array' && resolveRef(r.items).format === 'binary') {
        body[k] = [forgeFile()];
        speakeasyBody[k] = [speakeasyFile()];
      } else if (r.format === 'binary') {
        body[k] = forgeFile();
        speakeasyBody[k] = speakeasyFile();
      } else {
        body[k] = speakeasyBody[k] = sample(v, 'request');
      }
    }
  }
  const hasParams = Object.keys(params).length > 0;
  // Speakeasy nests the body under `requestBody` only when path/query params exist too.
  const sBody = speakeasyBody ?? body;
  const speakeasy = sBody === undefined ? params : hasParams ? { ...params, requestBody: sBody } : sBody;
  // Fern always flattens params and body properties into one request object.
  const forge = { ...params, ...(body ?? {}) };
  return { speakeasy, forge, multipart };
}

// ------------------------------------------------------------- mock server ---
let nextResponse = null;
let captured = [];
const server = createServer(async (req, res) => {
  const chunks = [];
  for await (const c of req) chunks.push(c);
  const raw = Buffer.concat(chunks);
  const url = new URL(req.url, 'http://localhost');
  const contentType = req.headers['content-type'] ?? '';
  let body = null;
  if (contentType.includes('application/json')) body = raw.length ? JSON.parse(raw.toString()) : null;
  else if (contentType.includes('multipart/form-data')) {
    const fd = await new Response(raw, { headers: { 'content-type': contentType } }).formData();
    body = {};
    for (const [k, v] of fd.entries()) {
      const key = k.replace(/\[\]$/, ''); // Documenso's server strips `[]` (openapi-fetch-handler.ts)
      const value =
        typeof v === 'string'
          ? (() => {
              try {
                return JSON.parse(v);
              } catch {
                return v;
              }
            })()
          : { file: v.name, size: v.size, type: v.type };
      (body[key] ??= []).push(value);
    }
  } else if (raw.length) body = raw.toString();
  const query = {};
  for (const k of [...new Set(url.searchParams.keys())].sort()) query[k] = url.searchParams.getAll(k);
  captured.push({
    method: req.method,
    path: url.pathname,
    query,
    contentType: contentType.split(';')[0] || null,
    auth: req.headers.authorization ?? null,
    accept: req.headers.accept ?? null,
    userAgent: req.headers['user-agent'] ?? null,
    extraHeaders: Object.keys(req.headers).filter((h) => h.startsWith('x-')).sort(),
    body,
  });
  const r = typeof nextResponse === 'function' ? nextResponse(captured.length) : nextResponse;
  res.writeHead(r.status, r.headers);
  res.end(r.body);
});
await new Promise((ok) => server.listen(0, '127.0.0.1', ok));
const base = `http://127.0.0.1:${server.address().port}`;

const speakeasy = new Documenso({ apiKey: 'api_test', serverURL: base });
const forge = new DocumensoClient({ apiKey: 'api_test', baseUrl: base });
const methodAt = (client, path) => {
  const parts = path.split('.');
  const owner = parts.slice(0, -1).reduce((o, k) => o[k], client);
  return owner[parts.at(-1)].bind(owner);
};

const normalize = (v) =>
  JSON.parse(
    JSON.stringify(v, (_k, x) => (x instanceof Date ? x.toISOString() : x)),
  );

async function invoke(client, path, input, opts) {
  captured = [];
  try {
    const value = await methodAt(client, path)(input, opts);
    const described =
      typeof value === 'string' || value instanceof Blob || value instanceof ReadableStream || value instanceof ArrayBuffer
        ? { kind: value?.constructor?.name, preview: typeof value === 'string' ? value.slice(0, 40) : undefined }
        : value;
    return { ok: true, value: normalize(described), requests: captured };
  } catch (error) {
    return {
      ok: false,
      error: {
        name: error?.constructor?.name,
        statusCode: error?.statusCode,
        body: normalize(error?.body ?? error?.data$ ?? null),
        message: String(error?.message).slice(0, 4000),
      },
      requests: captured,
    };
  }
}

const diffKeys = (a, b) =>
  [...new Set([...Object.keys(a ?? {}), ...Object.keys(b ?? {})])].filter((k) => !isDeepStrictEqual(a?.[k], b?.[k]));

// ------------------------------------------------------------------ runs ----
const results = [];
for (const s of surface) {
  const entry = operations.get(s.operationId);
  const inputs = buildInputs(entry);
  if (process.env.WIRE_DEBUG_OP === s.path) console.error(JSON.stringify(inputs.forge, null, 1));
  const successSchema = entry.op.responses['200']?.content?.['application/json']?.schema ?? {};
  // The spec declares these as application/json but the server actually streams a PDF
  // (see the Content-Type response header the spec also declares).
  const isDownload = entry.op.responses['200']?.headers?.['Content-Type']?.schema?.enum?.includes('application/pdf') ?? false;
  const responseBody = isDownload ? '%PDF-1.7 fake' : JSON.stringify(sample(successSchema, 'response'));
  nextResponse = {
    status: 200,
    headers: { 'content-type': isDownload ? 'application/pdf' : 'application/json' },
    body: responseBody,
  };
  const a = await invoke(speakeasy, s.path, inputs.speakeasy);
  const b = await invoke(forge, s.path, inputs.forge);
  const ra = a.requests[0];
  const rb = b.requests[0];
  // Header-level differences are reported once in the summary rather than per operation.
  const headerKeys = ['userAgent', 'extraHeaders', 'accept'];
  const requestDiff = ra && rb ? diffKeys(ra, rb).filter((k) => !headerKeys.includes(k)) : ['missing-request'];
  const resultSame = a.ok && b.ok ? isDeepStrictEqual(a.value, b.value) : a.ok === b.ok;
  results.push({
    path: s.path,
    operationId: s.operationId,
    download: isDownload,
    requestMatches: requestDiff.length === 0,
    headers: ra && rb ? Object.fromEntries(headerKeys.map((k) => [k, { speakeasy: ra[k], forge: rb[k] }])) : null,
    requestDiff: Object.fromEntries(requestDiff.map((k) => [k, { speakeasy: ra?.[k], forge: rb?.[k] }])),
    resultMatches: resultSame,
    speakeasy: a.ok ? { ok: true, ...(isDownload ? { value: a.value } : {}) } : { ok: false, error: a.error },
    forge: b.ok ? { ok: true, ...(isDownload ? { value: b.value } : {}) } : { ok: false, error: b.error },
    ...(resultSame || !a.ok || !b.ok ? {} : { resultDiff: diffKeys(a.value, b.value) }),
  });
}

// ---------------------------------------------------- behavioural probes ----
const probes = {};
const errorBody = JSON.stringify({ message: 'Bad input', code: 'BAD_REQUEST', issues: [{ message: 'x' }] });
nextResponse = { status: 400, headers: { 'content-type': 'application/json' }, body: errorBody };
const getInput = { envelopeId: 'envelope_1' };
{
  const a = await invoke(speakeasy, 'envelopes.get', getInput);
  const b = await invoke(forge, 'envelopes.get', getInput);
  probes.error400 = { speakeasy: a.error, forge: b.error };
}
nextResponse = { status: 418, headers: { 'content-type': 'text/plain' }, body: 'teapot' };
{
  const a = await invoke(speakeasy, 'envelopes.get', getInput);
  const b = await invoke(forge, 'envelopes.get', getInput);
  probes.undeclaredStatus = { speakeasy: a.error, forge: b.error };
}
const okBody = JSON.stringify(sample(operations.get('envelope-get').op.responses['200'].content['application/json'].schema, 'response'));
const flaky = (n) =>
  n === 1 ? { status: 503, headers: { 'content-type': 'application/json' }, body: '{"message":"unavailable"}' } : { status: 200, headers: { 'content-type': 'application/json' }, body: okBody };
for (const [label, sOpts, fOpts] of [
  ['defaults', undefined, undefined],
  [
    'retries-enabled',
    { retries: { strategy: 'backoff', backoff: { initialInterval: 1, maxInterval: 5, exponent: 1.1, maxElapsedTime: 1000 }, retryConnectionErrors: true } },
    { maxRetries: 2 },
  ],
]) {
  nextResponse = flaky;
  const a = await invoke(speakeasy, 'envelopes.get', getInput, sOpts);
  const aCount = a.requests.length;
  nextResponse = flaky;
  const b = await invoke(forge, 'envelopes.get', getInput, fOpts);
  probes[`retry503:${label}`] = {
    speakeasy: { ok: a.ok, attempts: aCount },
    forge: { ok: b.ok, attempts: b.requests.length },
  };
}
nextResponse = { status: 200, headers: { 'content-type': 'application/json' }, body: JSON.stringify({ id: 'envelope_1' }) };
{
  const a = await invoke(speakeasy, 'envelopes.get', getInput);
  const b = await invoke(forge, 'envelopes.get', getInput);
  probes.responseMissingRequiredFields = {
    speakeasy: a.ok ? 'accepted' : a.error,
    forge: b.ok ? 'accepted' : b.error,
  };
}
{
  nextResponse = { status: 200, headers: { 'content-type': 'application/json' }, body: okBody };
  const a = await invoke(speakeasy, 'envelopes.get', { envelopeId: 123 });
  const b = await invoke(forge, 'envelopes.get', { envelopeId: 123 });
  probes.invalidInput = {
    speakeasy: a.ok ? `sent ${a.requests.length} request(s)` : { name: a.error.name, requestsSent: a.requests.length },
    forge: b.ok ? `sent ${b.requests.length} request(s)` : { name: b.error.name, requestsSent: b.requests.length },
  };
}
{
  nextResponse = { status: 200, headers: { 'content-type': 'application/json' }, body: '{}' };
  const bad = { envelopeId: 'envelope_1', data: { title: 42 } };
  const a = await invoke(speakeasy, 'envelopes.update', bad);
  const b = await invoke(forge, 'envelopes.update', bad);
  probes.invalidBody = {
    speakeasy: { ok: a.ok, name: a.error?.name, requestsSent: a.requests.length },
    forge: { ok: b.ok, name: b.error?.name, requestsSent: b.requests.length },
  };
}
{
  nextResponse = { status: 200, headers: { 'content-type': 'application/json' }, body: okBody };
  const out = {};
  for (const [label, make] of [
    ['speakeasy', () => new Documenso({ serverURL: base })],
    ['forge', () => new DocumensoClient({ baseUrl: base })],
  ]) {
    try {
      const r = await invoke(make(), 'envelopes.get', getInput);
      out[label] = r.ok ? { authHeader: r.requests[0]?.auth } : { error: r.error.name, message: r.error.message.slice(0, 80) };
    } catch (error) {
      out[label] = { error: error.constructor.name, message: String(error.message).slice(0, 80) };
    }
  }
  probes.apiKeyFromEnv = out;
}
server.close();

const summary = {
  operations: results.length,
  requestMatches: results.filter((r) => r.requestMatches).length,
  resultMatches: results.filter((r) => r.resultMatches).length,
  bothSucceeded: results.filter((r) => r.speakeasy.ok && r.forge.ok).length,
  speakeasyFailed: results.filter((r) => !r.speakeasy.ok).map((r) => r.path),
  forgeFailed: results.filter((r) => !r.forge.ok).map((r) => r.path),
  requestMismatches: results.filter((r) => !r.requestMatches).map((r) => `${r.path}: ${Object.keys(r.requestDiff).join(',')}`),
  headerDifferences: [...new Set(results.filter((r) => r.headers).map((r) => JSON.stringify(r.headers)))].map((h) => JSON.parse(h)),
  resultMismatches: results.filter((r) => !r.resultMatches).map((r) => r.path),
};
const report = { summary, probes, results };
if (reportPath) writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({ summary, probes }, null, 2));
