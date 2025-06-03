function cartesianNeighbor(x, y) {
  let res = []

  for (let i = x - 1; i <= x + 1; i++) {
    for (let j = y - 1; j <= y + 1; j++) {
      if (i !== x || j !== y) {
        res.push([i, j])
      }
    }
  }

  return res
}

console.log(cartesianNeighbor(2, 2))
