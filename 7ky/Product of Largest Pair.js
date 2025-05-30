function maxProduct(arr) {
  let max1 = -Infinity
  let max2 = -Infinity

  for (let num of arr) {
    if (num > max1) {
      max2 = max1
      max1 = num
    } else if (num > max2) {
      max2 = num
    }
  }

  return max1 * max2
}

console.log(maxProduct([56, 335, 195, 443, 6, 494, 252]))
