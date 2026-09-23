'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { calculateOrderTotal } = require('../lib/pricing');

test('calculates subtotal, 18% GST and total', () => {
  const r = calculateOrderTotal([{ price: 100, qty: 2 }, { price: 50, qty: 1 }]);
  assert.deepStrictEqual(r, { subtotal: 250, gst: 45, total: 295 });
});

test('rounds to 2 decimal places', () => {
  const r = calculateOrderTotal([{ price: 799.5, qty: 3 }]);
  assert.strictEqual(r.subtotal, 2398.5);
  assert.strictEqual(r.gst, 431.73);
  assert.strictEqual(r.total, 2830.23);
});

test('empty cart returns zero', () => {
  assert.deepStrictEqual(calculateOrderTotal([]), { subtotal: 0, gst: 0, total: 0 });
});

test('rejects negative quantity', () => {
  assert.throws(() => calculateOrderTotal([{ price: 10, qty: -1 }]), RangeError);
});
