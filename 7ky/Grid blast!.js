function fire(x, y) {
  const map = [
    ['top left', 'top middle', 'top right'],
    ['middle left', 'center', 'middle right'],
    ['bottom left', 'bottom middle', 'bottom right'],
  ]

  return map[y][x]
}

console.log(fire(0, 0))
console.log(fire(1, 2))
