function sc(apple) {
  const res = [0, 0]

  apple.forEach((el, ind) => {
    if (el.includes('B')) {
      if (el.indexOf('B') != -1) {
        res[0] = ind
        res[1] = el.indexOf('B')
      }
    }
  })

  return res
}

const apple = [
  ['A', 'A', 'A', 'A', 'A'],
  ['A', 'A', 'A', 'A', 'A'],
  ['A', 'A', 'A', 'A', 'A'],
  ['A', 'B', 'A', 'A', 'A'],
  ['A', 'A', 'A', 'A', 'A'],
]

console.log(sc(apple))
