function decode(code, n) {
  const strKey = n.toString()
  const decodeArr = code.map((el, ind) => {
    const num = strKey[ind % strKey.length]
    return String.fromCharCode(96 + el - num)
  })

  return decodeArr.join('')
}

console.log(decode([14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8], 1939))
