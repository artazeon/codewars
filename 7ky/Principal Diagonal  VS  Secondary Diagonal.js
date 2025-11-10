function diagonal(matrix) {
  let sumP = 0
  let sumS = 0

  for (let i = 0; i < matrix.length; i++) {
    sumP += matrix[i][i]
    sumS += matrix[i][matrix.length - 1 - i]
  }

  if (sumP === sumS) return 'Draw!'
  return sumP > sumS ? 'Principal Diagonal win!' : 'Secondary Diagonal win!'
}

console.log(
  diagonal([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
  'Principal Diagonal win!'
)
