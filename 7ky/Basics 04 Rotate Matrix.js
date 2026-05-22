function rotateMatrix(matrix) {
  const rows = matrix.length
  const cols = matrix[0].length
  const newMatrix = Array.from({ length: cols }, () => [])

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      newMatrix[cols - 1 - j][i] = matrix[i][j]
    }
  }

  return newMatrix
}

console.log(
  rotateMatrix([
    [-1, 4, 5],
    [2, 3, 4],
  ]),
  [
    [5, 4],
    [4, 3],
    [-1, 2],
  ],
)
