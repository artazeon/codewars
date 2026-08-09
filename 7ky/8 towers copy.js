function pattern(n) {
  let output = ''

  for (let i = 2; i <= n; i += 2) {
    output += `${i}`.repeat(i) + `\n`
  }
  return output.trim()
}
console.log(pattern(1), '')
console.log(pattern(2), '22')
console.log(pattern(5), '22\n4444')
