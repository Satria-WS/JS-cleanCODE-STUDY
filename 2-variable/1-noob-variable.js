//refrence : https://masteringjs.io/tutorials/fundamentals/foreach-object

function calculateTotal(items, options) {
  let t = 0;
  items.forEach((i) => {
    t += i.price * i.quan;
  });


  return t;
}

const testItems = [
  { price: 15, quan: 2 },
  { price: 20, quan: 5 },
  { price: 9, quan: 3 },
];


// console.log(calculateTotal(testItems,{}));
console.log(calculateTotal(testItems));

/* 

What is the difference between forEach and map?
The main difference between map and forEach is that the map method returns a new array 
by applying the callback function on each element of an array,
while the forEach method doesn't return anything. 
You can use the forEach method to mutate the source array, 
but this isn't really the way it's meant to be used.

*/

/* 
const testItems = [
  { price: 15, quan: 2 },
  { price: 20, quan: 5 },
  { price: 9, quan: 3 },
];

let emptyObject = [];
let emptyNumber = 0;

Object.keys(testItems).forEach((i) => {
  emptyObject.push(testItems[i].price);
  emptyNumber += testItems[i].price;
});

console.log(emptyObject);
console.log(emptyNumber);
 */


