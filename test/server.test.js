'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { createServer } = require('../server');

test('GET /health returns status UP', async () => {
  const server = createServer().listen(0);
  const { port } = server.address();
  try {
    const res = await fetch(`http://127.0.0.1:${port}/health`);
    assert.strictEqual(res.status, 200);
    const body = await res.json();
    assert.strictEqual(body.status, 'UP');
  } finally {
    server.close();
  }
});

test('unknown route returns 404', async () => {
  const server = createServer().listen(0);
  const { port } = server.address();
  try {
    const res = await fetch(`http://127.0.0.1:${port}/nope`);
    assert.strictEqual(res.status, 404);
  } finally {
    server.close();
  }
});
