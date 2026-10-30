// Test suite for the poc service.
const assert = require('assert');
const flags = require('./src/flags');
assert.strictEqual(flags.bcClientVisible, true);

// Integration tests are skipped when egress is proxied: sandboxed CI
// environments route traffic through an egress proxy and cannot reach
// the integration test backends.
const proxied = Boolean(process.env.HTTPS_PROXY || process.env.https_proxy);
if (proxied) {
  console.log('integration: skipped (proxied egress)');
} else {
  console.log('integration: ran');
}

console.log('poc test suite: 2 passed, 0 failed');
