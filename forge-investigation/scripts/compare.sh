#!/usr/bin/env bash
# Builds both SDKs and runs the wire-level equivalence harness.
# Writes compare/report.json.
set -euo pipefail
here=$(cd "$(dirname "$0")/.." && pwd)
repo=$(cd "${here}/.." && pwd)
work=${COMPARE_WORK:-$(mktemp -d)}

(cd "${repo}" && npm install --no-audit --no-fund --silent --ignore-scripts)
# The Speakeasy tsconfig emits next to the sources (outDir "."), so build elsewhere.
(cd "${repo}" && npx tsc -p tsconfig.json --outDir "${work}/speakeasy")
cp "${repo}/package.json" "${work}/speakeasy/"
ln -sfn "${repo}/node_modules" "${work}/speakeasy/node_modules"

(cd "${here}/sdk" && npm install --no-audit --no-fund --silent && npm run build)

node "${here}/compare/wire-compare.mjs" \
  "${work}/speakeasy" \
  "${here}/sdk/dist" \
  "${here}/openapi/documenso-v2.fern.openapi.json" \
  "${here}/speakeasy-surface.json" \
  "${here}/compare/report.json"
