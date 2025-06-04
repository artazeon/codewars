function encode(str) {
  let newStr = ''

  for (let i = 0; i < str.length; i++) {
    const currentChar =
      str[i].toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 1

    if (currentChar <= 26 && currentChar >= 1) {
      newStr += currentChar
    } else {
      newStr += str[i]
    }
  }
  return newStr
}

console.log(encode('abc-#@5'))
