function solve(nums, div) {
  return nums.map((el) => {
    const remainder = el % div
    return el + remainder
  })
}

console.log(
  solve([2, 7, 5, 9, 100, 34, 32, 0], 3),
  [4, 8, 7, 9, 101, 35, 34, 0],
)
console.log(solve([], 2), [])
