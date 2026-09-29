#!/usr/bin/env node
// Post-generation fixes for Forge output that cannot be configured away.
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = process.argv[2];
const file = join(dir, 'sdk-operation-types.ts');
const src = readFileSync(file, 'utf8');
// Forge's sdk-map generator hardcodes the Cloudflare namespace name.
writeFileSync(file, src.replace("import type { CloudflareApi } from './index.js';", "import type { Documenso } from './index.js';"));
