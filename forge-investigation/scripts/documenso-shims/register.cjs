// Lets the Documenso tRPC router load under plain tsx (no Babel/Vite): Lingui
// macros normally compiled away at build time, and native modules whose
// install scripts were skipped, are replaced with inert stubs.
const Module = require('module');
const path = require('path');
const shimPath = path.join(__dirname, 'lingui-macro.cjs');
const stubPath = path.join(__dirname, 'native-stub.cjs');
const orig = Module._resolveFilename;
Module._resolveFilename = function (req, ...rest) {
  if (/^@lingui\/(core\/|react\/)?macro$/.test(req)) return shimPath;
  if (/skia-canvas|^sharp$|^canvas$/.test(req)) return stubPath;
  return orig.call(this, req, ...rest);
};
