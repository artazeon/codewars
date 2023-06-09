function strCount(str, letter) {
  const arr = str.split('')
  const arrFilt = arr.filter((char) => char === letter)
  return arrFilt.length
}
