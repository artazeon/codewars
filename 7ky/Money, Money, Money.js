function calculateYears(principal, interest, tax, desired) {
  let years = 0
  while (principal < desired) {
    principal = principal + (principal * interest - principal * interest * tax)
    years++
  }

  return years
}

console.log(calculateYears(1000, 0.05, 0.18, 1100))
console.log(calculateYears(1000, 0.01625, 0.18, 1200))

