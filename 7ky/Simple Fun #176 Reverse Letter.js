function reverseLetter(str) {
  let revStr = ''
  const regex = /[a-z]/

  for (let i = str.length - 1; i >= 0; i--) {
    if (regex.test(str[i])) {
      revStr += str[i]
    }
  }

  return revStr
}
console.log(reverseLetter('krish21an'))
