function solve(arr) {
  return arr.find((el) => !arr.includes(-el))
}
console.log(solve([1, -1, 2, -2, 3]))
console.log(solve([1, -1, 2, -2, 3, 3]))
