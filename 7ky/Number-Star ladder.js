function pattern(n) {
  let output = '1'
  const z = '*'

  for (let i = 2; i <= n; i++) {
    output += `\n1${z.repeat(i - 1)}${i}`
  }

  return output
}

console.log(pattern(3))
