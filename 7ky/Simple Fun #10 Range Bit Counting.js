function rangeBitCount(a, b) {
  let str = ''

  for (let i = a; i <= b; i++) {
    str += i.toString(2)
  }

  return str.replace(/0/g, '').length
}

console.log(rangeBitCount(2, 7))
