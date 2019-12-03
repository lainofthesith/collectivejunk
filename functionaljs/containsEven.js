// Learning Functional Programming with Javascript
// Chapter 03, Video 04, Exercise 01

//var _ = require("lodash")
var numbers = [ 2, 4, 6, 8, 10, 12 ]

/*
var arrayContainsEven = false

for (var i = 0; i < numbers.length; i++) {
  var element = numbers[i]
  if (element % 2 === 0) {
    arrayContainsEven = true
  }
}

var arrayIsAllEven = true

for (var i = 0; i < numbers.length; i++) {
  var element = numbers[i]
  if (!(element % 2 === 0)) {
    arrayIsAllEven = false
  }
}
/*
/*
var arrayContainsEven = _.some(numbers, function(e){
  return element % 2 === 0
})

var arrayIsAllEven = _.every(numbers, function(e){
  return element % 2 === 0
})
*/

var arrayContainsEven = numbers.some(function(e){
  return element % 2 === 0
})

var arrayIsAllEven = numbers.every(function(e){
  return element % 2 === 0
})
 