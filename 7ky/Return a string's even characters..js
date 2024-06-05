function evenChars(string) {
  if (string.length < 2 || string.length > 100) {
    return 'invalid string'
  } else {
    return string.split('').filter((el, ind) => ind % 2 !== 0)
  }
}

console.log(evenChars('abcdefghijklm'))
console.log(evenChars('a'))
