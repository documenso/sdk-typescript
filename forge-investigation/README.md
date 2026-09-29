# Investigation: replacing Speakeasy with cloudflare/forge

**Question:** can [cloudflare/forge](https://github.com/cloudflare/forge) generate a TypeScript SDK that exactly matches the features of the Speakeasy-generated `@documenso/sdk-typescript`?

**Short answer: no, not as a drop-in replacement, and Forge is the wrong layer to adopt.**

- **Wire compatibility is excellent.** On the HTTP level the Forge SDK behaves almost identically to Speakeasy:
  - 89/89 operations send the same method, path, query, content type, auth and body.
  - 85/85 JSON responses parse to identical values.
- **The public TypeScript API is a full breaking change.** It changes class names, options, type names, error classes, file inputs and return types.
- **Several Speakeasy features have no equivalent:** the MCP server, standalone functions, hooks, env-var auth, typed per-operation errors, and generated docs.
- **Forge is a thin, Cloudflare-specific wrapper around [Fern](https://buildwithfern.com)'s TypeScript generator.** It was first published on 2026-09-28 and isn't on npm. Branding and config are hardcoded, and it needed three patches plus a post-processing step to produce a Documenso SDK at all.

If we want to leave Speakeasy, use Fern directly, or another generator. Adopting Forge gives us Fern plus Cloudflare-specific workarounds we'd have to undo.

---

## What Forge actually is

`@cloudflare/forge-transformer-sdk-ts` (the "generate a TypeScript SDK" entry point) does four things:

1. Applies a few "Fern compatibility" fixes to the OpenAPI document.
2. Writes a Fern workspace with a **hardcoded** `generators.yml`:
   - organization `cloudflare`
   - `skipResponseValidation: true`
   - `maxRetries: 2`
   - and so on.
3. Pulls `fernapi/fern-typescript-sdk:3.80.1`, binary-patches the generator's `cli.cjs` for Cloudflare-specific issues, and runs it in Docker in three shards.
4. Copies in a Cloudflare runtime (`unwrapCloudflareEnvelope.ts`) that unwraps `{ success, result, errors }` response envelopes, then writes an `sdk-map.json`.

The rest of the monorepo (`astro-fern`, `docs-site`, `cloudflare-forge-sdk-{lang}`) is Cloudflare's own docs and SDK packaging.

### Problems hit running it on Documenso

| # | Problem | Workaround used here |
|---|---|---|
| 1 | The transformer's build script needs Cloudflare's private `openapi.json` in the repo root | Stub file (`scripts/generate.sh`) |
| 2 | Requires a Docker daemon; not published to npm (`@cloudflare/forge*` → 404) | Build from source at a pinned commit |
| 3 | Client, namespace and error names are hardcoded to `CloudflareApi*` | Patch the bundled CLI (`scripts/patch-forge-cli.mjs`) to set Fern `naming` |
| 4 | Response validation is hardcoded off, and the Fern serde layer is off | Same patch: `skipResponseValidation: false`, `noSerdeLayer: false` |
| 5 | The Cloudflare envelope unwrapper is always installed. It would rewrite any Documenso response with top-level `success` and `result` keys | Same patch: skip `installCustomRuntime` |
| 6 | Forge's `sdk-map` step requires the root class name to end in `Client`, so we can't call it `Documenso` | Named `DocumensoClient` |
| 7 | Forge's generated `sdk-operation-types.ts` hardcodes `import type { CloudflareApi }` and doesn't compile under any other name | `scripts/postprocess.mjs` |
| 8 | The Speakeasy overlay uses `x-speakeasy-*` extensions and OpenAPI Overlay 1.0.0. Forge has its own overlay format. | `scripts/translate-overlay.mjs` converts it to `x-fern-sdk-group-name`, `x-fern-sdk-method-name` and `x-fern-enum` |

Before the overlay translation (#8), the stock Forge output had a real bug: `envelopes.create` sent uploaded files as `JSON.stringify(file)`. The raw spec types `files` as `items: {}`, and only the Speakeasy overlay marks them `format: binary`.

---

## Wire-level comparison (`compare/wire-compare.mjs`)

Both SDKs are driven against the same local mock server. Each call uses the same deterministic input, generated from the spec for every operation. The harness diffs the captured HTTP request and the value each SDK returns. The full output is in `compare/report.json`.

| Check | Result |
|---|---|
| Operations exposed at the same `client.<group>.<method>` path | **89 / 89** |
| Identical request (method, path, query, content type, auth, JSON or multipart body incl. files) | **89 / 89** |
| Identical parsed JSON response | **85 / 85** |
| `@deprecated` operations | 52 / 52 in both |
| PDF download endpoints (4) | Both broken, differently (see below) |

Header differences apply to every request:

| Header | Speakeasy | Forge |
|---|---|---|
| `Accept` | `application/json` | `*/*` |
| `User-Agent` | `speakeasy-sdk/typescript 0.9.1 …` | runtime default |
| Extra headers | none | `X-Fern-Language`, `X-Fern-Runtime`, `X-Fern-Runtime-Version` |

### Behavioural probes

| Probe | Speakeasy | Forge |
|---|---|---|
| Declared 400 | Throws `EnvelopeGetBadRequestError`: typed per operation, `body` is the raw string | Throws `BadRequestError`: shared across operations, `body` is parsed JSON |
| Undeclared status (418) | `APIError` | `DocumensoError` |
| One 503, then 200, default config | **No retry**: throws | **Retries by default** (2 retries): succeeds |
| Same, retries configured | Succeeds after 2 attempts | Succeeds after 2 attempts |
| Response missing required fields | `ResponseValidationError` | `ParseError` (only with serde on; stock Forge silently accepts) |
| Invalid body field type | `SDKValidationError`, no request sent | `JsonError`, no request sent |
| Invalid path param type (`envelopeId: 123`) | `SDKValidationError`, no request sent | **Request sent** (path and query params aren't validated) |
| No `apiKey`, `DOCUMENSO_API_KEY` set | Uses the env var | Throws `Please provide 'apiKey'` |
| Default timeout | None | 60 s |
| PDF download (server sends `application/pdf`) | Throws `APIError` | **Resolves successfully** with `{ ok: false, error: { reason: "non-json", rawBody } }` as the value, and the PDF bytes decoded as text |

The PDF issue comes from the spec. The four download endpoints declare `content: application/json` with a `Content-Type: application/pdf` header. Fixing it (declare `application/pdf` with `format: binary`) would help both generators. Forge's current behaviour is worse: it fails silently instead of throwing.

---

## Feature parity matrix

| Speakeasy feature | Forge / Fern | Notes |
|---|---|---|
| Resource grouping (`documenso.envelopes.fields.createMany`) | ✅ | Via translated overlay |
| All 89 operations, same wire format | ✅ | See above |
| Multipart upload with JSON `payload` part and `files[]` | ✅ | Fern sends `files`; Documenso's server strips `[]`, so both work |
| Deprecation annotations | ✅ | |
| Runtime request validation (Zod) | ⚠️ Partial | Only with serde on; path and query params aren't validated |
| Runtime response validation | ⚠️ Opt-in | Off in stock Forge; needs a patch |
| Retries (per client and per call) | ⚠️ Different | `maxRetries: number` only. No backoff config, no `retryCodes`, no `retryConnectionErrors`. **Default changes from off to 2 retries.** |
| Timeouts | ⚠️ Different | `timeoutInSeconds`, 60 s default (Speakeasy: `timeoutMs`, no default) |
| Server selection (`serverURL`, `serverIdx`, per-call `serverURL`) | ⚠️ Different | `baseUrl` / `environment` per client only |
| Debug logging (`debugLogger`, `DOCUMENSO_DEBUG`) | ⚠️ Different | `logging` option; no env var |
| Custom HTTP client and hooks (`beforeRequest`, `afterSuccess`, `afterError`, `sdkInit`) | ❌ | Only a custom `fetch` / `fetcher` |
| `DOCUMENSO_API_KEY` env fallback | ❌ | |
| Async API-key supplier | ✅ | `core.Supplier` |
| Typed per-operation error classes | ❌ | Shared per status code (`BadRequestError`, …) |
| Standalone tree-shakable functions (`envelopesGet(core, …)` returning `Result`) | ❌ | Class methods only |
| `Documenso` class name | ❌ | `DocumensoClient`; `Documenso` becomes the types namespace |
| Raw response access | ✅ | `.withRawResponse()` (Speakeasy has `HttpMeta` on some responses) |
| **MCP server** (`bin/mcp-server`, 89 tools, `@modelcontextprotocol/sdk`) | ❌ | Neither Forge nor Fern's TS generator produces one |
| Generated README, per-resource docs, USAGE and FUNCTIONS | ❌ | Forge emits source only |
| Package scaffolding (`package.json`, build, CJS output, JSR) | ❌ | Forge emits source only; `sdk/package.json` here is hand-written |
| Generated tests | ❌ | Fern can do wire tests, but Forge's pipeline doesn't expose it |
| Code samples pushed to the API docs registry | ❌ | |
| Scheduled regeneration and npm publish (`sdk_generation.yaml`, `sdk_publish.yaml`) | ❌ | Would need our own CI; the generator needs Docker |
| Runtime dependencies | ➕ | Fern: none. Speakeasy: `zod`, `@modelcontextprotocol/sdk` |

### Breaking changes for SDK users

The SDK is marked beta, but these would still hit every user:

```ts
// Speakeasy (today)
import { Documenso } from "@documenso/sdk-typescript";
const client = new Documenso({ apiKey, serverURL, retryConfig, timeoutMs, debugLogger });
const env = await client.envelopes.get({ envelopeId }, { retries, timeoutMs });
await client.envelopes.create({ payload, files: [{ fileName: "a.pdf", content: bytes }] });
await client.envelopeRecipients.envelopeRecipientRejectOnBehalfOf({ recipientId, requestBody: { envelopeId, reason } });

// Forge / Fern
import { DocumensoClient, Documenso } from "…";
const client = new DocumensoClient({ apiKey, baseUrl, maxRetries, timeoutInSeconds, logging });
const env = await client.envelopes.get({ envelopeId }, { maxRetries, timeoutInSeconds });
await client.envelopes.create({ payload, files: [new File([bytes], "a.pdf")] });
await client.envelopeRecipients.envelopeRecipientRejectOnBehalfOf({ recipientId, envelopeId, reason });
```

Type names change everywhere. For example:

| Speakeasy | Forge |
|---|---|
| `operations.EnvelopeGetRequest` | `Documenso.GetEnvelopesRequest` |
| `operations.EnvelopeFieldCreateManyRequest` | `Documenso.envelopes.CreateManyFieldsRequest` |
| `operations.TemplateCreateDocumentFromTemplateRequest` | `Documenso.UseTemplatesRequest` |

### Size and build

| | Speakeasy | Forge (serde on) | Forge (stock, serde off) |
|---|---|---|---|
| Source files | 428 | 4,417 | 416 |
| Source size | 7.6 MB | 20 MB | — |
| `tsc` build | 2 m 44 s | 35 s | — |
| Generation time | — | ~40 s (Docker) | ~40 s (Docker) |

---

## Recommendation

1. **Don't adopt Forge.** It's a day-old, unpublished, Cloudflare-internal pipeline. Everything useful in it comes from Fern, and we had to patch out its Cloudflare-specific behaviour.
2. **If leaving Speakeasy is the goal, evaluate Fern directly** (`fern generate --local` with our own `generators.yml`). The wire results above carry over, since this *is* Fern 3.80.1 output. Fern's own config covers several gaps without patches: `naming`, `noSerdeLayer`, `generateWireTests`, and packaging via `outputSourceFiles` or npm output.
3. Even with Fern, budget for the following:
   - **Replacing the MCP server:** hand-written, or generated separately.
   - **A major-version release** with a migration guide, because of the breaking changes above.
   - **Our own regenerate-and-publish CI.**
4. **Independent of the generator, fix the OpenAPI spec for the 4 PDF download endpoints.** They should declare `application/pdf` with `format: binary`. Both SDKs mishandle these today.

---

## Layout and reproduction

```
forge-investigation/
├── README.md                     this report
├── openapi/
│   ├── documenso-v2.openapi.json       raw spec (89 operations)
│   └── documenso-v2.fern.openapi.json  after the Speakeasy overlay → Fern translation
├── speakeasy-surface.json        client.<group>.<method> → operationId, extracted from src/sdk
├── sdk/                          the Forge-generated SDK (src/ is generated; package.json and tsconfig are hand-written)
├── compare/
│   ├── wire-compare.mjs          equivalence harness
│   └── report.json               latest results
└── scripts/
    ├── generate.sh               clone and build Forge at a pinned commit, translate the overlay, generate sdk/src
    ├── compare.sh                build both SDKs and run the harness
    ├── dump-documenso-openapi.sh build the spec from Documenso source (when app.documenso.com is unreachable)
    ├── speakeasy-surface.mjs
    ├── translate-overlay.mjs
    ├── patch-forge-cli.mjs
    └── postprocess.mjs
```

```bash
cd forge-investigation
scripts/generate.sh                  # or: scripts/generate.sh path/to/openapi.json
scripts/compare.sh
```

Environment used:

- Forge `cfe397c` (the only commit on its default branch)
- Fern CLI 5.112.0 and `fern-typescript-sdk` 3.80.1
- Node 22
- Spec generated from `documenso/documenso@573c928a`. `app.documenso.com` was blocked by this sandbox's network policy, so `scripts/dump-documenso-openapi.sh` was used. Its 89 operation IDs match the Speakeasy SDK exactly.

Running `generate.sh` from a clean work directory reproduces `sdk/src` byte for byte.
