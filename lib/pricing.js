'use strict';

// Round to 2 decimal places (paise) safely
function round2(n) {
  return Math.round((n + Number.EPSILON) * 100) / 100;
}

// Calculate subtotal, 18% GST (default) and grand total for a cart
function calculateOrderTotal(items, gstPercent = 18) {
  if (!Array.isArray(items)) {
    throw new TypeError('items must be an array');
  }
  const subtotal = items.reduce((sum, item) => {
    if (typeof item.price !== 'number' || typeof item.qty !== 'number' ||
        item.price < 0 || item.qty < 0) {
      throw new RangeError('price and qty must be non-negative numbers');
    }
    return sum + item.price * item.qty;
  }, 0);
  const gst = (subtotal * gstPercent) / 100;
  return {
    subtotal: round2(subtotal),
    gst: round2(gst),
    total: round2(subtotal + gst)
  };
}

module.exports = { calculateOrderTotal, round2 };
