function fit_in(a, b, m, n) {
  const lengthQ = Math.max(a, b)
  const widthQ = Math.min(a, b)

  const lengthS = Math.max(m, n)
  const widthS = Math.min(m, n)

  return lengthS >= a + b && widthS >= lengthQ
}

console.log(fit_in(1, 2, 3, 2), true)
console.log(fit_in(1, 2, 2, 1), false)
console.log(fit_in(3, 2, 3, 2), false)
console.log(fit_in(1, 2, 1, 2), false)
console.log(fit_in(6, 5, 8, 7), false)
