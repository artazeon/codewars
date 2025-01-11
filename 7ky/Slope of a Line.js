function getSlope(p1, p2) {
  const [x1, y1] = p1
  const [x2, y2] = p2
  const k = (y2 - y1) / (x2 - x1)
  return k !== 0 ? k : null
}

console.log(getSlope([1, 1], [2, 2]))
console.log(getSlope([1, 1], [1, 1]))
