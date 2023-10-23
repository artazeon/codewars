function mxdiflg(a1, a2) {
  let max = -1

  for (const x of a1) {
    for (const y of a2) {
      const diff = Math.abs(x.length - y.length)
      if (diff > max) {
        max = diff
      }
    }
  }

  return max
}

console.log(
  mxdiflg(
    [
      'hoqq',
      'bbllkw',
      'oox',
      'ejjuyyy',
      'plmiis',
      'xxxzgpsssa',
      'xxwwkktt',
      'znnnnfqknaz',
      'qqquuhii',
      'dvvvwz',
    ],
    ['cccooommaaqqoxii', 'gggqaffhhh', 'tttoowwwmmww']
  )
)
