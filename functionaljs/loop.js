// Learning Functional Programming with Javascript
// Chapter 05, Video 03, Exercise 01


//countdown
function loop(i) {
    console.log("i is " + i)
    if (i < 0) {
        loop(i -1)
    }
}


//Countup

function loopUp(i){
    console.log("i is " + i)
    if (i < 10) {
        loopUp(i + 1)
    }
}

loopUp(10)
loop(0)