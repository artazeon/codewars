var findAverage = function (nums) {
  const summ = nums.reduce((acc, el) => acc + el, 0)
  return summ / nums.length
}
console.log(findAverage([1, 3, 5, 7]))
