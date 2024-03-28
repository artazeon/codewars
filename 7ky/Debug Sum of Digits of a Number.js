function getSumOfDigits(integer) {
  let sum = null
  let digits = integer.toString()
  console.log(digits)
  for (let i = 0; i < digits.length; i++) {
    sum += +digits[i]
  }
  return sum
}

console.log(getSumOfDigits(123))
