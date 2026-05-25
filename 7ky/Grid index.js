function gridIndex(grid, indices) {
  let str = grid.flat().join('')
  const res = indices.map((i) => str[i - 1]).join('')
  return res
}

console.log(
  gridIndex(
    [
      ['m', 'y', 'e'],
      ['x', 'a', 'm'],
      ['p', 'l', 'e'],
    ],
    [1, 5, 6],
  ),
)
