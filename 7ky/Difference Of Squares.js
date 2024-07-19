function differenceOfSquares(n) {
  let squareSum = 0
  let sumSquares = 0

  for (let i = 0; i <= n; i++) {
    squareSum += i
    sumSquares += Math.pow(i, 2)
  }

  return Math.pow(squareSum, 2) - sumSquares
}

console.log(differenceOfSquares(10))
