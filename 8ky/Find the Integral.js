function integrate(coefficient, exponent) {
  const newNum = exponent + 1
  const int = coefficient / newNum
  return `${int}x^${newNum}`
}