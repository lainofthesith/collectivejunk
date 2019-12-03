// Learning Functional Programming with Javascript
// Chapter 02, Video 04, Exercise 01
// Revised

function createCounter() {
  var count =  0
  
  return {
    increment: function() {
      count += 1
  },
  currentValue: function() {
    return count
   }
  }
}

var myCounter = createCounter()

console.log(myCounter.currentValue())

myCounter.increment()
myCounter.increment()

console.log(myCounter.currentValue())

//myCounter.count = 999 // no longer accessible throws error

console.log(myCounter.currentValue())

// - Old 
//const myCounter = {
//   count: 0,
//   increment: function() {
//     this.count += 1
//   },
//   currentValue: function() {
//     return this.count
//   }
// }

// console.log(myCounter.currentValue())

// myCounter.increment()
// myCounter.increment()

// console.log(myCounter.currentValue())

// myCounter.count = 999 // uh oh!

// console.log(myCounter.currentValue())