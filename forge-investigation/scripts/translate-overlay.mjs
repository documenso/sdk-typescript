#!/usr/bin/env node
// Applies .speakeasy/speakeasy-modifications-overlay.yaml (OpenAPI Overlay
// 1.0.0) to the raw Documenso spec, translating Speakeasy extensions into the
// Fern extensions Forge understands:
//
//   x-speakeasy-group: a.b          -> x-fern-sdk-group-name: [a, b]
//   x-speakeasy-name-override: foo  -> x-fern-sdk-method-name: foo
//   x-speakeasy-enums: [Name, ...]  -> x-fern-enum: { VALUE: { name: Name } }
//   x-speakeasy-metadata            -> dropped
//
// Operations the overlay does not rename fall back to Speakeasy's tag-derived
// defaults, read from the committed Speakeasy surface (speakeasy-surface.json)
// so both SDKs expose identical `client.<group>.<method>` paths.
import { readFileSync, writeFileSync } from 'node:fs';
import { JSONPath } from 'jsonpath-plus';
import { parse } from 'yaml';

const [specIn, overlayIn, surfaceIn, specOut] = process.argv.slice(2);
const spec = JSON.parse(readFileSync(specIn, 'utf8'));
const overlay = parse(readFileSync(overlayIn, 'utf8'));
const surface = JSON.parse(readFileSync(surfaceIn, 'utf8'));

function translate(update, target) {
  const out = {};
  for (const [key, value] of Object.entries(update)) {
    if (key === 'x-speakeasy-group') out['x-fern-sdk-group-name'] = String(value).split('.');
    else if (key === 'x-speakeasy-name-override') out['x-fern-sdk-method-name'] = value;
    else if (key === 'x-speakeasy-metadata') continue;
    else if (key === 'x-speakeasy-enums') {
      if (!Array.isArray(target.enum)) continue;
      out['x-fern-enum'] = Object.fromEntries(target.enum.map((v, i) => [v, { name: value[i] }]));
    } else out[key] = value;
  }
  return out;
}

function merge(target, update) {
  for (const [key, value] of Object.entries(update)) {
    if (value && typeof value === 'object' && !Array.isArray(value) && target[key] && typeof target[key] === 'object') {
      merge(target[key], value);
    } else {
      target[key] = value;
    }
  }
}

const stats = { actions: 0, matches: 0, unmatched: [] };
for (const action of overlay.actions ?? []) {
  stats.actions++;
  const matches = JSONPath({ path: action.target, json: spec, resultType: 'value', wrap: true });
  if (matches.length === 0) stats.unmatched.push(action.target);
  for (const target of matches) {
    if (action.remove) throw new Error(`remove actions unsupported: ${action.target}`);
    if (action.update) merge(target, translate(action.update, target));
    stats.matches++;
  }
}

// Fill in Speakeasy's implicit defaults and cross-check explicit ones.
const byOp = new Map(surface.map((s) => [s.operationId, s]));
let defaulted = 0;
const mismatched = [];
for (const pathItem of Object.values(spec.paths)) {
  for (const op of Object.values(pathItem)) {
    const s = op?.operationId && byOp.get(op.operationId);
    if (!s) continue;
    if (!op['x-fern-sdk-method-name']) {
      op['x-fern-sdk-group-name'] = s.groups;
      op['x-fern-sdk-method-name'] = s.method;
      defaulted++;
    } else if (op['x-fern-sdk-group-name'].join('.') !== s.groups.join('.') || op['x-fern-sdk-method-name'] !== s.method) {
      mismatched.push(op.operationId);
    }
  }
}

writeFileSync(specOut, `${JSON.stringify(spec, null, 2)}\n`);
console.error(
  `overlay: ${stats.actions} actions, ${stats.matches} matches, ${stats.unmatched.length} unmatched targets` +
    `${stats.unmatched.length ? ` (${stats.unmatched.join(', ')})` : ''}; ` +
    `${defaulted} ops used Speakeasy tag defaults; ${mismatched.length} naming mismatches${mismatched.length ? `: ${mismatched}` : ''}`,
);
