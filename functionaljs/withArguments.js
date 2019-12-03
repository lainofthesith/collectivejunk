// Learning Functional Programming with Javascript
// Chapter 02, Video 03, Exercise 02


function callWithArgs(arg1, arg2, func) {
  return func(arg1, arg2)
}

function add(x, y) {
  return x + y
}

function subtract(x, y) {
  return x - y
}

callWithArgs(1, 2, add)
callWithArgs(9, 4, subtract)
