function diffBig2(arr) {
  let max1 = -Infinity
  let max2 = -Infinity

  for (const num of arr) {
    if (num > max1) {
      max2 = max1
      max1 = num
    } else if (num > max2) {
      max2 = num
    }
  }

  return max1 - max2
}

console.log(diffBig2([10, 5, 2]))
