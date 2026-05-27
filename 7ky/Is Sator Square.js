function isSatorSquare(tablet) {
  const n = tablet.length

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (
        tablet[i][j] !== tablet[j][i] ||
        tablet[i][j] !== tablet[n - 1 - i][n - 1 - j]
      ) {
        return false
      }
    }
  }

  return true
}

console.log(
  isSatorSquare([
    ['B', 'A', 'T', 'S'],
    ['A', 'B', 'U', 'T'],
    ['T', 'U', 'B', 'A'],
    ['S', 'T', 'A', 'B'],
  ]),
)
console.log(
  isSatorSquare([
    ['S', 'A', 'T', 'O', 'R'],
    ['A', 'R', 'E', 'P', 'O'],
    ['T', 'E', 'N', 'E', 'T'],
    ['O', 'P', 'E', 'R', 'A'],
    ['R', 'O', 'T', 'A', 'S'],
  ]),
)
console.log(
  isSatorSquare([
    ['B', 'A', 'T', 'S'],
    ['U', 'B', 'U', 'T'],
    ['T', 'U', 'B', 'U'],
    ['S', 'T', 'A', 'B'],
  ]),
)
