function isOrthogonal(u, v) {
  const summ = u.reduce((acc, el, ind) => acc + el * v[ind], 0)

  return summ === 0
}

console.log(isOrthogonal([1, 2], [2, 1]))
console.log(isOrthogonal([1, -2], [2, 1]))
