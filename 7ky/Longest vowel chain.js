function solve(s) {
  let long = 0
  let curr = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[aeiou]/g)) {
      curr++
      long = Math.max(long, curr)
    } else {
      curr = 0
    }
  }

  return long
}

console.log(solve('codewarrios'))
