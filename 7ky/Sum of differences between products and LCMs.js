function sumDifferencesBetweenProductsAndLCMs(pairs) {
  const gcd = (a, b) => (b ? gcd(b, a % b) : a)
  const lcm = (a, b) => (a && b ? (a * b) / gcd(a, b) : 0)

  return pairs.reduce((sum, [a, b]) => sum + (a * b - lcm(a, b)), 0)
}

console.log(
  sumDifferencesBetweenProductsAndLCMs([
    [15, 18],
    [4, 5],
    [12, 60],
  ]),
  840,
)
console.log(
  sumDifferencesBetweenProductsAndLCMs([
    [1, 1],
    [0, 0],
    [13, 91],
  ]),
  1092,
  840,
)
