// Feature flag wiring
const client = require('./client');
// LaunchDarkly flag: bc-client-visible
const bcClientVisible = client.variation('bc-client-visible', false);
module.exports = { bcClientVisible };
