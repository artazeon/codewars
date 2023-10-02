function solution(nums) {
  if (nums === null || nums.length === 0) {
    return []
  } else {
    return nums.sort((a, b) => a - b)
  }
}

console.log(solution([1, 2, 3, 10, 5]))
console.log(solution([]))
console.log(solution(null))
