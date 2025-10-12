function wordToBin(str) {
  return str
    .split('')
    .map((el) => el.charCodeAt(0).toString(2).padStart(8, '0'))
}

console.log(wordToBin('man'))
