function pattern(n) {
  let output = ''

  for (let i = 2; i < n; i = Math.pow(2, i)) {
    output += i.repeat(i)
  }
  return output
}
console.log(pattern(2), '22')
console.log(pattern(5), '22\n4444')
