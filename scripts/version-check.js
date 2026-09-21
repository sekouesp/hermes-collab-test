#!/usr/bin/env node
/**
 * Check that Node.js version is >= 18
 */
const [major] = process.version.slice(1).split('.').map(Number);

if (major < 18) {
  console.error(`ERROR: Node.js ${process.version} is too old. Requires >= 18.`);
  process.exit(1);
}

console.log(`OK: Node.js ${process.version} meets requirements (>= 18).`);
