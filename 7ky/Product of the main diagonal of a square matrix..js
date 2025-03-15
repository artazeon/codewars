function mainDiagonalProduct(mat) {
  let mult = 1

  for (let i = 0; i < mat.length; i++) {
    mult = mult * mat[i][i]
  }
  return mult
}

console.log(
  mainDiagonalProduct([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
)
