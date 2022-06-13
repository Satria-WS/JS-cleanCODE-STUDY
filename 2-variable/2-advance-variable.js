const TAX_RATE = 1.1;
const SHIPPING_DEFAULT = 3;

function calculateTotal(items, option = {}) {
  if (items == null || items.length === 0) return 0;

  let total = 0;
  items.forEach((item) => {
    total += item.price * item.quantity;
  });
  total = total - total * (option.discount || 0);
  total = total * TAX_RATE;
  if (option.shipping !== 0) {
    total = total + (option.shipping || SHIPPING_DEFAULT);
  }
  return total;
}

const testItems = [
  { price: 15, quantity: 3 },
  { price: 25, quantity: 4 },
  { price: 55, quantity: 1 },
];

console.log(calculateTotal(testItems, {}));
