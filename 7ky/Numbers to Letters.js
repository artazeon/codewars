function switcher(x) {
  const alphabet = {
    1: 'z',
    2: 'y',
    3: 'x',
    4: 'w',
    5: 'v',
    6: 'u',
    7: 't',
    8: 's',
    9: 'r',
    10: 'q',
    11: 'p',
    12: 'o',
    13: 'n',
    14: 'm',
    15: 'l',
    16: 'k',
    17: 'j',
    18: 'i',
    19: 'h',
    20: 'g',
    21: 'f',
    22: 'e',
    23: 'd',
    24: 'c',
    25: 'b',
    26: 'a',
    27: '!',
    28: '?',
    29: ' ',
  }

  const result = x.map((num) => {
    return alphabet[num]
  })

  return result.join('')
}

console.log(switcher([1, 5, 26]))
console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']))
