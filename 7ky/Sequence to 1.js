function seqToOne(n) {
  const arr = []

  const step = n <= 0 ? 1 : -1

  for (let i = n; step > 0 ? i <= 1 : i >= 1; i += step) {
    arr.push(i)
  }

  return arr
}

console.log(seqToOne(5), [5, 4, 3, 2, 1])
console.log(seqToOne(-1), [-1, 0, 1])
