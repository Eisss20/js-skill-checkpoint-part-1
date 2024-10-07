// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];

let minGoods = inventory[0].quantity

for (let i = 0 ; i<inventory.length ; i++) {
        if (minGoods > inventory[i].quantity) {
           minGoods = inventory[i].quantity
        }
}
 
console.log(minGoods);








