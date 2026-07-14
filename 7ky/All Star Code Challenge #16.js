function noRepeat(str) {
  return str
    .split('')
    .filter((char, index, arr) => arr.indexOf(char) === arr.lastIndexOf(char))
    .join('')[0]
}

console.log(noRepeat('aabbccdde'))
