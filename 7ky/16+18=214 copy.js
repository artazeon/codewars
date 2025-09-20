function testit(a, b) {
  const maxLen = Math.max(a.length, b.length)
  const res = []
  for (let i = 0; i < maxLen; i++) {
    if (i < a.length) res.push(a[i])
    if (i < b.length) res.push(b[i])
  }
  return res
}

console.log(testit([0], [1]), [0, 1])
console.log(testit([1, 2], [3, 4]), [1, 2, 3, 4])
console.log(testit([1], [2, 3, 4]), [1, 2, 3, 4])
console.log(testit([1, 2, 3], [4]), [1, 2, 3, 4])
console.log(testit([1, 2], [1, 2]), [1, 1, 2, 2])
