function factors(x) {
  if (!Number.isInteger(x) || x < 1) return -1
  const res = []

  for (let i = x; i > 0; i--) {
    if (x % i === 0) res.push(i)
  }

  return res
}

console.log(factors(54), [54, 27, 18, 9, 6, 3, 2, 1])
