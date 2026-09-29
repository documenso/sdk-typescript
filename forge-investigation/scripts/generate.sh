#!/usr/bin/env bash
# Regenerates forge-investigation/sdk/src with cloudflare/forge.
#
# Usage: scripts/generate.sh [openapi.json]
#   With no argument the spec is fetched from the same URL Speakeasy uses.
# Requires: git, node >= 22, pnpm, and a running Docker daemon (Forge runs Fern's
# TypeScript generator in a container).
set -euo pipefail

FORGE_REF=${FORGE_REF:-cfe397c296a5e6d9fce01eb335ed805821e5547c}
SPEC_URL=https://app.documenso.com/api/v2-beta/openapi.json
here=$(cd "$(dirname "$0")/.." && pwd)
repo=$(cd "${here}/.." && pwd)
work=${FORGE_WORK:-$(mktemp -d)}
forge="${work}/forge"
transformer="${forge}/packages/cloudflare-forge-transformer-sdk-ts"

docker info >/dev/null 2>&1 || { echo "error: Docker daemon is not running" >&2; exit 1; }

# 1. Source spec (raw, pre-overlay) -------------------------------------------
spec="${here}/openapi/documenso-v2.openapi.json"
if [ $# -ge 1 ]; then
  cp "$1" "${spec}"
else
  curl -fsSL "${SPEC_URL}" -o "${spec}"
fi

# 2. Build Forge -------------------------------------------------------------
if [ ! -d "${forge}/.git" ]; then
  git clone https://github.com/cloudflare/forge "${forge}"
fi
git -C "${forge}" checkout --quiet "${FORGE_REF}"
(cd "${forge}" && pnpm install --frozen-lockfile)
# The transformer's build script packages Cloudflare's own OpenAPI document, which
# is not in the public repo. A stub is enough; it only feeds the baseline mode.
stub='{"openapi":"3.0.3","info":{"title":"stub","version":"1"},"paths":{}}'
[ -f "${forge}/openapi.json" ] || echo "${stub}" > "${forge}/openapi.json"
[ -f "${forge}/packages/cloudflare-fern-config/fern/openapi.json" ] \
  || echo "${stub}" > "${forge}/packages/cloudflare-fern-config/fern/openapi.json"
(cd "${transformer}" && pnpm run build)
node "${here}/scripts/patch-forge-cli.mjs" "${transformer}/dist/cli.js" "${transformer}/dist/cli.documenso.js"

# 3. Speakeasy overlay -> Fern extensions -------------------------------------
(cd "${here}" && npm install --no-audit --no-fund --silent)
node "${here}/scripts/speakeasy-surface.mjs" "${repo}" "${here}/speakeasy-surface.json"
node "${here}/scripts/translate-overlay.mjs" \
  "${spec}" \
  "${repo}/.speakeasy/speakeasy-modifications-overlay.yaml" \
  "${here}/speakeasy-surface.json" \
  "${here}/openapi/documenso-v2.fern.openapi.json"

# 4. Generate ---------------------------------------------------------------
node "${transformer}/dist/cli.documenso.js" "${here}/openapi/documenso-v2.fern.openapi.json" --out "${work}/out"
rm -rf "${here}/sdk/src"
cp -r "${work}/out/sdk" "${here}/sdk/src"
node "${here}/scripts/postprocess.mjs" "${here}/sdk/src"
echo "==> regenerated ${here}/sdk/src"
