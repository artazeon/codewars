function oddOnesOut(nums) {
  const countObj = {}
  nums.forEach((num) => (countObj[num] ? countObj[num]++ : (countObj[num] = 1)))
  return nums.filter((num) => countObj[num] % 2 === 0)
}

console.log(oddOnesOut([1, 2, 3, 1, 3, 3])) // [1, 1]
console.log(oddOnesOut([1, 1, 2, 2, 3, 3, 3])) // [1, 1, 2, 2]
console.log(oddOnesOut([26, 23, 24, 17, 23, 24, 23, 26])) // [26, 24, 24, 26]
console.log(oddOnesOut([1, 2, 3])) // []
console.log(oddOnesOut([1])) // []
