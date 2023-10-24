function capitalize(s) {
  const resArr = ['', '']

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      resArr[0] += s[i].toUpperCase()
      resArr[1] += s[i]
    } else {
      resArr[0] += s[i]
      resArr[1] += s[i].toUpperCase()
    }
  }

  return resArr
}

console.log(capitalize('codewars'))
