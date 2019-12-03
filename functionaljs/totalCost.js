// Learning Functional Programming with Javascript
// Chapter 03, Video 05, Exercise 01

//var _ = require("lodash")

var shoppingList = [
  { name: "Eggs",    price: 4.99 },
  { name: "Milk",    price: 3.99 },
  { name: "Bananas", price: 2.79 },
  { name: "Beer",    price: 6.99 }
]

/*var totalCost = _.reduce(shoppingList, function(acc, curr) {
  return acc + curr.price
}, 0)

*/

var totalCost = shoppingList.reduce(function(acc, curr) {
  return acc + curr.price
}, 0)


console.log(totalCost)