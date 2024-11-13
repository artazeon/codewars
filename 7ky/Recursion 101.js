// function solve(a, b) {
//   const i = (a, b) => {
//     if (!a || !b) {
//       return [a, b]
//     } else if (a >= 2 * b) {
//       return ii(a, b)
//     } else if (b >= 2 * a) {
//       return iii(a, b)
//     } else {
//       return [a, b]
//     }
//   }

//   const ii = () => {
//     a = a - 2 * b
//     return i(a, b)
//   }

//   const iii = () => {
//     b = b - 2 * a
//     return i(a, b)
//   }

//   return i(a, b)
// }

function solve(a, b) {
  const i = (a, b) =>
    !a || !b
      ? [a, b]
      : a >= 2 * b
      ? i(a - 2 * b, b)
      : b >= 2 * a
      ? i(a, b - 2 * a)
      : [a, b]

  return i(a, b)
}
console.log(solve(0, 19))
console.log(solve(6, 0))
console.log(solve(6, 19), [6, 7])
console.log(solve(2, 1), [0, 1])
console.log(solve(22, 5), [0, 1])
console.log(solve(2, 10), [2, 2])
