function smaller(nums) {
  let result = []

  for (let i = 0; i < nums.length; i++) {
    let count = 0

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        count++
      }
    }
    result.push(count)
  }

  return result
}

console.log(smaller([5, 4, 3, 2, 1]))
console.log(smaller([1, 2, 3]))
