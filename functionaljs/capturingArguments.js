// Learning Functional Programming with Javascript
// Chapter 02, Video 04, Exercise 02

function createCounter(count) {

  return {
    increment: function() {
      count = count + 1
    },

    currentValue: function() {
      return count
    }
  }
}

var startAt5 = createCounter(5)

var startFromNeg3 = createCounter(-3)

