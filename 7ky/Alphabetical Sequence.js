function alphaSeq(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'

  const sortedArr = str
    .toLowerCase()
    .split('')
    .sort((a, b) => a.localeCompare(b))

  const arrRes = sortedArr.map((el, ind) => {
    const count = alphabet.indexOf(el)

    return el.toUpperCase() + el.repeat(count)
  })

  return arrRes.join(',')
}

console.log(alphaSeq('ZpglnRxqenU'))
