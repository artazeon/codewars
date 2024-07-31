function sumMul(n, m) {
  if (m <= 0) {
    return 'INVALID'
  }
  let summ = 0

  for (let i = 0; i < m; i++) {
    if (i % n === 0) {
      summ += i
    }
  }

  return summ
}

console.log(sumMul(4, -7))
