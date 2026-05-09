function roots(a, b, c) {
  const D = b * b - 4 * a * c
  if (D < 0) return null
  return +(-b / a).toFixed(2)
}

console.log(roots(1, -3, 2))
console.log(roots(1, 2, 1))
console.log(roots(1, 0, 1))
