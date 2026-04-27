function binaryPyramid(m, n) {
  let arr = []

  while (m <= n) {
    arr.push(+m.toString(2))
    m++
  }

  const summ = arr.reduce((acc, el) => acc + el, 0)

  return summ.toString(2)
}

console.log(binaryPyramid(1, 4))
