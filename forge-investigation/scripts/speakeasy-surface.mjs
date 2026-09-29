#!/usr/bin/env node
// Extracts the public method surface of the Speakeasy-generated SDK
// (sdk.<group>.<subgroup>.<method> -> operationId) by walking src/sdk/*.ts
// and src/funcs/*.ts. Used to (a) project Speakeasy naming onto Fern
// `x-fern-sdk-*` extensions and (b) diff the Forge output against it.
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve(process.argv[2] ?? '.');
const sdkDir = join(root, 'src/sdk');
const funcsDir = join(root, 'src/funcs');

const funcOperation = new Map();
for (const file of readdirSync(funcsDir)) {
  const src = readFileSync(join(funcsDir, file), 'utf8');
  const m = src.match(/operationID:\s*"([^"]+)"/);
  if (m) funcOperation.set(file.replace(/\.ts$/, ''), m[1]);
}

const classes = new Map();
for (const file of readdirSync(sdkDir)) {
  const src = readFileSync(join(sdkDir, file), 'utf8');
  for (const cls of src.matchAll(/export class (\w+) extends ClientSDK \{([\s\S]*?)\n\}/g)) {
    const [, name, body] = cls;
    const getters = [...body.matchAll(/get (\w+)\(\): (\w+) \{/g)].map(([, prop, type]) => ({ prop, type }));
    const methods = [...body.matchAll(/async (\w+)\([\s\S]*?unwrapAsync\((\w+)\(/g)].map(([, method, fn]) => ({
      method,
      fn,
      deprecated: false,
    }));
    for (const m of methods) {
      const idx = body.indexOf(`async ${m.method}(`);
      const doc = body.slice(Math.max(0, body.lastIndexOf('/**', idx)), idx);
      m.deprecated = doc.includes('@deprecated');
    }
    classes.set(name, { getters, methods });
  }
}

const surface = [];
const walk = (className, path) => {
  const cls = classes.get(className);
  if (!cls) return;
  for (const m of cls.methods) {
    surface.push({
      path: [...path, m.method].join('.'),
      groups: path,
      method: m.method,
      func: m.fn,
      operationId: funcOperation.get(m.fn),
      deprecated: m.deprecated,
    });
  }
  for (const g of cls.getters) walk(g.type, [...path, g.prop]);
};
walk('Documenso', []);

const out = process.argv[3];
if (out) writeFileSync(out, `${JSON.stringify(surface, null, 2)}\n`);
else process.stdout.write(`${JSON.stringify(surface, null, 2)}\n`);
