#!/usr/bin/env node
// Forge's CLI hardcodes a Cloudflare-flavoured Fern workspace (organization
// "cloudflare", client "CloudflareApiClient", error "CloudflareApiError",
// response validation disabled) and always installs a Cloudflare response
// envelope unwrapper. None of this is configurable, so to produce a
// Documenso-branded SDK we patch a copy of the bundled CLI.
import { readFileSync, writeFileSync } from 'node:fs';

const [cliIn, cliOut] = process.argv.slice(2);
let src = readFileSync(cliIn, 'utf8');

function replace(from, to) {
  if (!src.includes(from)) throw new Error(`patch point not found: ${from}`);
  src = src.replace(from, to);
}

replace('organization: "cloudflare"', 'organization: "documenso"');
replace(
  '          skipResponseValidation: true\n',
  [
    '          naming:',
    '            namespace: Documenso',
    // Forge's sdk-map step requires the root class name to end in "Client".
    '            client: DocumensoClient',
    '            error: DocumensoError',
    '            timeoutError: DocumensoTimeoutError',
    '            environment: DocumensoEnvironment',
    '          skipResponseValidation: false',
    '          noSerdeLayer: false',
    '',
  ].join('\n'),
);
// Documenso responses are not wrapped in Cloudflare's { success, result } envelope.
replace('    installCustomRuntime(generated);\n', '');

writeFileSync(cliOut, src);
