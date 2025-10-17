function sum(matrix) {
  let sum = 0

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (i === j) {
        sum += matrix[i][j]
        const temp = matrix[i].reverse()
        sum += temp[i]
      }
    }
  }

  return sum
}

console.log(
  sum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
)
console.log(
  sum([
    [-2, 5, 3, 2],
    [9, -6, 5, 1],
    [3, 2, 7, 3],
    [-1, 8, -4, 8],
  ])
)
