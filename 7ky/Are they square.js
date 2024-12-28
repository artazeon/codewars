const isSquare = (arr) =>
  arr.length ? arr.every((num) => Number.isInteger(Math.sqrt(num))) : undefined

console.log(isSquare([1, 4, 9, 16, 25, 36]))
console.log(isSquare([1, 2, 3, 4, 5, 6]))
console.log(isSquare([]))
