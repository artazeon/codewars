const diagonalSum = (m) => m.reduce((acc, el, ind) => acc + el[ind], 0)

console.log(
  diagonalSum([
    [1, 2],
    [3, 4],
  ])
)
