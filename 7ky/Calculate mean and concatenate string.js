function mean(lst) {
  let num = 0
  let str = ''

  lst.forEach((el) => {
    isNaN(+el) ? (str += el) : (num += el / 10)
  })
  return [+num.toFixed(2), str]
}

console.log(
  mean([
    'u',
    '6',
    'd',
    '1',
    'i',
    'w',
    '6',
    's',
    't',
    '4',
    'a',
    '6',
    'g',
    '1',
    '2',
    'w',
    '8',
    'o',
    '2',
    '0',
  ])
)
