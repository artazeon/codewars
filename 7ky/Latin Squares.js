function makeLatinSquare(n) {
  const res = []

  for (let i = 0; i < n; i++) {
    const row = []

    for (let j = i + 1; j <= n; j++) {
      row.push(j)
    }

    for (let j = 1; j <= i; j++) {
      row.push(j)
    }

    res.push(row)
  }

  return res
}

console.log(makeLatinSquare(4))
