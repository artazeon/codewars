function oddOrEven(n) {
  if (n % 2 === 1) return 'EITHER'
  if (n % 4 === 0) return 'EVEN'
  return 'ODD'
}

console.log(oddOrEven(6))
