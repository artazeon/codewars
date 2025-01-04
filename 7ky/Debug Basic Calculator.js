const calculate = (a, o, b) => {
  if (o === '+') return a + b
  if (o === '-') return a - b
  if (o === '*') return a * b
  if (o === '/' && b !== 0) return a / b

  return null
}

console.log(calculate(2, '+', 4))
console.log(calculate(2, '-', 4))
console.log(calculate(2, '/', 4))
console.log(calculate(-4, '*', 8))
console.log(calculate(8, 'm', 2))
