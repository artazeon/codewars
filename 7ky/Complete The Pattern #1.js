function pattern(n) {
  let output = ''

  for (let i = 1; i <= n; i++) {
    let str = ``
    for (let j = 1; j <= i; j++) {
      str += i
    }
    i == n ? (output += `${str}`) : (output += `${str}\n`)
  }
  return output
}

console.log(pattern(5))
console.log(pattern(0))
