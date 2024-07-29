function validateWord(s) {
  s = s.toLowerCase()

  let obj = {}

  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]) {
      obj[s[i]]++
    } else {
      obj[s[i]] = 1
    }
  }

  const values = Object.values(obj)

  return new Set(values).size === 1
}
console.log(validateWord('abcabc'))
console.log(validateWord('Abcabc'))
console.log(validateWord('abc123'))
console.log(validateWord('abcabcd'))
