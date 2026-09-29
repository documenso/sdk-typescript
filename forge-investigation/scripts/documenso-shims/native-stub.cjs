const stub = new Proxy(function () {}, { get: (t, k) => (k === '__esModule' ? false : k === 'default' ? stub : stub), apply: () => stub, construct: () => stub });
module.exports = stub;
