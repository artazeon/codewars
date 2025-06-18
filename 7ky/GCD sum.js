function solve(sum, gcd) {
  if (sum % gcd !== 0) return -1
  const target = sum / gcd

  for (let x = 1; x < target; x++) {
    const y = target - x
    let a = x,
      b = y
    while (b !== 0) [a, b] = [b, a % b]
    if (a === 1) return [gcd * x, gcd * y].sort((a, b) => a - b)
  }

  return -1
}
console.log(solve(12, 4))
console.log(solve(6, 3))
