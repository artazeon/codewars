function solve(arr) {
  let res = arr.filter((el, ind) => arr.lastIndexOf(el) === ind)
  return res
}

console.log(solve([3, 4, 4, 3, 6, 3]))
