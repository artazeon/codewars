function alternateCase(s) {
  let alterCase = ''

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toLowerCase()) {
      alterCase += s[i].toUpperCase()
    } else {
      alterCase += s[i].toLowerCase()
    }
  }

  return alterCase
}

console.log(alternateCase('Hello World'))
