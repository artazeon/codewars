function matrix(array) {
  return array.map((row, rowIndex) =>
    row.map((item, colIndex) =>
      colIndex === rowIndex ? (item < 0 ? 0 : 1) : item
    )
  )
}

console.log(
  matrix([
    [-1, 4, -5, -9, 3],
    [6, -4, -7, 4, -5],
    [3, 5, 4, -9, -1],
    [1, 5, -7, -8, -9],
    [-3, 2, 1, -5, 6],
  ])
)
