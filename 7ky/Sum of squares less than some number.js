function getNumberOfSquares(n) {
  let sum = 0
  let res = []
  let i = 1

  while (sum < n) {
    sum += Math.pow(i, 2)
    res.push(Math.pow(i, 2))
    i++
  }

  return res.length - 1
}

console.log(getNumberOfSquares(6))
console.log(getNumberOfSquares(15))
