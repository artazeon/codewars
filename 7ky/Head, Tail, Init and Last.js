const head = (arr) => arr[0]
const tail = (arr) => arr.slice(1)
const init = (arr) => arr.slice(0, arr.length-1)
const last = (arr) => arr[arr.length - 1]

console.log(head([1,5,7,9]))
console.log(tail([1,5,7,9]))
console.log(init([1,5,7,9]))
console.log(last([1,5,7,9]))

// | HEAD | <----------- TAIL ------------> |
// [  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
// | <----------- INIT ------------> | LAST |

// head [x] = x
// tail [x] = []
// init [x] = []
// last [x] = x
