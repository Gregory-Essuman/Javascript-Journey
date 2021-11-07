// EXERCISE: LEVEL 1

// CLOSURES

function outerFunction() {
    let count = 0;
    function innerFunction() {              // Inner functions are able to access the outer variable thus making it a closure.
        count++
        return count
    }

    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())
