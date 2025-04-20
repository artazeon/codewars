function largestPower(n) {
  let res = 0
  while (Math.pow(3, res) < n) {
    res++
  }
  return res - 1
}

console.log(largestPower(3), 0)
console.log(largestPower(5), 1)
console.log(largestPower(7), 1)
console.log(largestPower(81), 3)
console.log(largestPower(82), 4)
