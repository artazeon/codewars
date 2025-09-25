function compoundArray(a, b) {
  const res = []
  const l = Math.max(a.length, b.length)

  for (let i = 0; i < l; i++) {
    if (i < a.length) res.push(a[i])
    if (i < b.length) res.push(b[i])
  }

  return res
}

console.log(compoundArray([11, 12], [21, 22, 23, 24]))
