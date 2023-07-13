function goodVsEvil(good, evil) {
  const gArr = good.split(' ').map(el => +el)
  const eArr = evil.split(' ').map(el => +el)
  const g =
    gArr[0] * 1 +
    gArr[1] * 2 +
    gArr[2] * 3 +
    gArr[3] * 3 +
    gArr[4] * 4 +
    gArr[5] * 10
  const e =
    eArr[0] * 1 +
    eArr[1] * 2 +
    eArr[2] * 2 +
    eArr[3] * 2 +
    eArr[4] * 3 +
    eArr[5] * 5 +
    eArr[6] * 10
  return g > e ? 'Battle Result: Good triumphs over Evil': g < e ? 'Battle Result: Evil eradicates all trace of Good' : 'Battle Result: No victor on this battle field'
}

console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'))
