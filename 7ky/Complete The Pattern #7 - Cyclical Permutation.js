function pattern(n) {
  if (n <= 0) return ''

  const result = []
  const arr = []

  for (let i = 1; i <= n; i++) {
    arr.push(i)
  }

  for (let i = 0; i < n; i++) {
    result.push(arr.join(''))

    const first = arr.shift()
    arr.push(first)
  }

  return result.join('\n')
}

console.log(pattern(7))
