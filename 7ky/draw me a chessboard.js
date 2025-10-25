function chessBoard(rows, columns) {
  const result = []

  for (let i = 0; i < rows; i++) {
    const row = []

    for (let j = 0; j < columns; j++) {
      ;(j + i) % 2 === 0 ? row.push('O') : row.push('X')
    }

    result.push(row)
  }

  return result
}

console.log(chessBoard(9, 4))
