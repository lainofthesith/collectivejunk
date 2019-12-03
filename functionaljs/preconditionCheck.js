// Learning Functional Programming with Javascript
// Chapter 02, Video 05, Exercise 01


/* DRY ME
function printmsgNTimes(n, msg) {
  if (n != null && typeof n === 'number') {
    if (msg != null && typeof msg === 'string') {
      for (var i = 0; i < n; i++) { console.log(msg) }
    }
  }
}

function getNthLetter(n, string) {
  if (n != null && typeof n === 'number') {
    if (string != null && typeof string === 'string') {
      return string.charAt(n)
    }
  }
}

function getSubstringOfLength(n, string) {
  if (n != null && typeof n === 'number') {
    if (string != null && typeof string === 'string') {
      return string.substring(0, n)
    }
  }
}

*/

function doIfSafe(n, msg, func){
  if (n != null && typeof n === 'number') {
    if (msg != null && typeof msg === 'string') {
        return func(n, msg)
    }
  }

}

function printmsgNTimes(n, msg) {
  console.log(msg)
 }


function getNthLetter(n, string) {
      return string.charAt(n)

}

function getSubstringOfLength(n, string) {
      return string.substring(0, n)
}

doIfSafe(4, "Banana", printmsgNTimes) // prints "Banana Banana Banana Banana"
doIfSafe(2, "Javascript",getNthLetter) // 'v'
doIfSafe(5, "Hello and welcome", getSubstringOfLength) // "Hello"
