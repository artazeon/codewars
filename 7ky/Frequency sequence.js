function freqSeq(str, sep) {
  const obj = {}
  const arr = str.split('')

  arr.forEach((el) => {
    obj[el] ? (obj[el] += 1) : (obj[el] = 1)
  })

  const seq = arr.map((el) => obj[el])

  return seq.join(sep)
}

console.log(freqSeq('hello world', '-'))
