function squareUp(n) {
  const res = []

  for (let i = 1; i <= n; i++) {
    for (let j = n; j >= 1; j--) {
      res.push(j <= i ? j : 0)
    }
  }

  return res
}

console.log(squareUp(4), [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1])
