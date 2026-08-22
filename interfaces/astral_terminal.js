/**
 * Astral Terminal — minimal interactive interface
 */
const { cycle } = require('../astral_shell/shell.js');

async function run() {
  console.log('Astral Terminal online. Running single forge cycle…\n');
  const result = await cycle();
  console.log('\nResult:', JSON.stringify(result, null, 2));
}

if (require.main === module) run();
