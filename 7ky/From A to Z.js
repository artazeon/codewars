function gimmeTheLetters(sp) {
  let res = ''

  for (let i = sp[0].charCodeAt(0); i <= sp[2].charCodeAt(0); i++) {
    res += String.fromCharCode(i)
  }
  return res
}

console.log(gimmeTheLetters('A-z'))
