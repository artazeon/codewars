function hammingWeight(x) {
  let bin = ''
  while (x > 0) {
    result = (x % 2) + result
    x = Math.floor(x / 2)
  }

  let ones = bin.split('0').join('')

  return ones.length
}
console.log(hammingWeight(10))
console.log(hammingWeight(21))
