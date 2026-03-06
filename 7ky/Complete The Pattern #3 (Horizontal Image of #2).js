function pattern(n) {
  let output = ''

  for (let i = 0; i < n; i++) {
    for (let j = n; j >= n - i; j--) {
      output += j
    }
    output += '\n'
  }

  return output.trim()
}

console.log(pattern(6))

console.log(pattern(5))
