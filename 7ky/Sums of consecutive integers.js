function position(x, y, n) {
  const start = y / x - (x - 1) / 2
  return start + n
}

console.log(position(4, 14, 3), 5)
