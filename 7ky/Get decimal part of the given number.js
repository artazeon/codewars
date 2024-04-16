function getDecimal(n) {
  return Math.abs(n % 1)
}
console.log(getDecimal(10))
console.log(getDecimal(-1.2))
console.log(getDecimal(-44613348.08160661))
