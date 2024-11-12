function eliminateUnsetBits(number) {
  const binStr = number.replace(/[^1]/g, '')
  return binStr ? parseInt(binStr, 2) : 0
}
console.log(eliminateUnsetBits('11010101010101'))
console.log(eliminateUnsetBits('0'))
