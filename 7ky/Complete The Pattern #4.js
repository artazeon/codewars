function pattern(n) {
  let output = ''
  if (n <= 0) return ''

  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      output += j
    }

    if (i === n) return output

    output += '\n'
  }
}
