function olympicRing(str) {
  const rings = {
    A: 1,
    a: 1,
    B: 2,
    b: 1,
    D: 1,
    d: 1,
    e: 1,
    g: 1,
    O: 1,
    o: 1,
    P: 1,
    p: 1,
    Q: 1,
    q: 1,
    R: 1,
    '@': 1,
  }

  let total = 0

  for (const char of str) {
    total += rings[char] || 0
  }

  const score = Math.floor(total / 2)

  if (score <= 1) return 'Not even a medal!'
  if (score === 2) return 'Bronze!'
  if (score === 3) return 'Silver!'
  return 'Gold!'
}

console.log(olympicRing('wHjMudLwtoPGocnJ'))
