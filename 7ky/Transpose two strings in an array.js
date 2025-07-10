function transposeTwoStrings([str1, str2]) {
  let result = ''
  const maxLength = Math.max(str1.length, str2.length)

  for (let i = 0; i < maxLength; i++) {
    const char1 = str1[i] || ' '
    const char2 = str2[i] || ' '
    result += `${char1} ${char2}\n`
  }

  return result.slice(0, -1)
}

console.log(transposeTwoStrings(['Hello', 'World']), 'H W\ne o\nl r\nl l\no d')
