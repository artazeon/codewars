function numbersWithDigitInside(x, d) {
  const numbers = []

  for (let i = 1; i <= x; i++) {
    if (i.toString().includes(d)) numbers.push(i)
  }

  const sum = numbers.reduce((sum, el) => sum + el, 0)
  const mult = numbers.reduce((mult, el) => mult * el, 1)

  return numbers.length ? [numbers.length, sum, mult] : [0, 0, 0]
}

console.log(numbersWithDigitInside(11, 1))
console.log(numbersWithDigitInside(5, 6))
