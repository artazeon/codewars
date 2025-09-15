function pattern(n) {
  if (n <= 0) return ''
  if (n % 2 === 0) n--

  const lines = []
  for (let i = 1; i <= n; i += 2) {
    lines.push(String(i).repeat(i))
  }

  return lines.join('\n')
}

console.log(pattern(3))
