function generatePairs(n) {
  const arr = []

  for (let a = 0; a <= n; a++) {
    for (let b = 0; b <= n; b++) {
      if (a <= b) {
        arr.push([a, b])
      }
    }
  }

  return arr
}

console.log(generatePairs(2))
