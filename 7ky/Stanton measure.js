function stantonMeasure(a) {
  const one = a.filter((el) => el == 1)
  const n = a.filter((el) => el == one.length)
  return n.length
}

console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2]))
