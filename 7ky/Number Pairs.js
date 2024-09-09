function getLargerNumbers(a, b) {
  const arr = []
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      arr.push(a[i])
    } else {
      arr.push(b[i])
    }
  }
  return arr
}

console.log(getLargerNumbers([13, 64, 15, 17, 88], [23, 14, 53, 17, 80]))
