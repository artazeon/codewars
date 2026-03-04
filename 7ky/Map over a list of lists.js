function gridMap(fn, a) {
  return a.map((el) => el.map((item) => fn(item)))
}

const xss = [
  [1, 2, 3],
  [4, 5, 6],
]

console.log(gridMap((x) => x + 1, xss))
