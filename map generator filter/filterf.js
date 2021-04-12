let fruits = [
    {name: 'apple', price: 50},
    {name: 'banana', price: 110},
    {name: 'mangoe', price: 150},
    {name: 'grapes', price: 70},
    {name: 'guava', price: 60},
   
];

let priceOfFruits = [];
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].price > 100) {
        priceOfFruits.push(fruits[i]);
    }
}
console.log(priceOfFruits);