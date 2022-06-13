const TAX_RATE = 1.1;
const SHIPPING_DEFAULT = 5;

function calculateTotal(items, { shipping = SHIPPING_DEFAULT, discount = 0 } = {}) {
  if (items == null || items.length === 0) return 0;

  const itemCost = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  
  const discountRate = 1 - discount;
  return itemCost * discountRate * TAX_RATE + shipping;
}


const testItems = [
  { price: 15, quantity: 3 },
  { price: 25, quantity: 4 },
  { price: 55, quantity: 1 },
];

console.log(calculateTotal(testItems,{}));