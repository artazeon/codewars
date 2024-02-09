function incrementer(nums) {
  return nums.map((el, ind) => {
    let num = el + ind + 1
    return num >= 10 ? num % 10 : num
  })
}

console.log(incrementer([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8]))
