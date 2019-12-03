// Learning Functional Programming with Javascript
// Chapter 02, Video 02, Exercise 01

/* Refactor this
console.log()
console.log("Hello and welcome to the course!")
console.log("We seem to be using")
console.log("a lot of console.logs here.")
console.log("Why don't we rename it")
console.log("to make it look better?")
console.log("To do that, simply assign the function")
console.log("'console.log' to another variable.")
console.log("You can call it whatever you want.")
console.log("I called mine 'line' to reflect the")
console.log("way that I'm using it.")
console.log()
*/

//Renamed a func to something shorter for convenience, parentheses off !imp as () tranforms into return value of function instead of the function itself
let line = console.log;

line()
line("Hello and welcome to the course!")
line("We seem to be using")
line("a lot of console.logs here.")
line("Why don't we rename it")
line("to make it look better?")
line("To do that, simply assign the function")
line("'console.log' to another variable.")
line("You can call it whatever you want.")
line("I called mine 'line' to reflect the")
line("way that I'm using it.")
line()
