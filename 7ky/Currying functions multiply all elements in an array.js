// function multiplyAll(x) {
//   return function (y) {
//     const arr = []
//     for (let i = 0; i < x.length; i++) {
//       arr.push(x[i] * y)
//     }
//     return arr
//   }
// }

function multiplyAll(x) {
  return function (y) {
    return x.map((el) => el * y)
  }
}

console.log(multiplyAll([1, 2, 3])(2))
console.log(multiplyAll([])(10))
