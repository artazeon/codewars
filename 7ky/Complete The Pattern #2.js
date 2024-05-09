function pattern(n) {
  let output = ''

  for (let i = 1; i <= n; i++) {
    for (let j = n; j >= i; j--) {
      output += j
    }
    if (i < n) {
      output += '\n'
    }
  }

  return output
}

console.log(pattern(11))
