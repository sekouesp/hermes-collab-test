#!/usr/bin/env node
/**
 * Simple markdown formatter: read stdin, fix line endings, write stdout.
 */
const { readFileSync, writeFileSync } = require('fs');

const input = readFileSync(0, 'utf-8');
const formatted = input
  .replace(/
/g, '
')
  .replace(/
{3,}/g, '

')
  .trim() + '
';

process.stdout.write(formatted);
