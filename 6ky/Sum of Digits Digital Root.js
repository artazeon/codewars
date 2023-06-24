// function digitalRoot(n) {
//   let cifr = n
//   let str = String(n)

//   while (str.length > 1) {
//     cifr = str
//       .split('')
//       .reduce((accum, item) => {
//         return accum + +item
//       }, 0)
//     str = String(cifr)
//   }

//   return cifr
// }

function digital_root(n) {
  if (n < 10) return n

  return digital_root(
    n
      .toString()
      .split('')
      .reduce(function (acc, d) {
        return acc + +d
      }, 0)
  )
}

console.log(digital_root(16))
console.log(digital_root(161))
console.log(digital_root(456))
console.log(digital_root(4561))
