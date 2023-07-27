function findMissingLetter(array) {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ]

  let start = alphabet.indexOf(array[0])

  let miss = 0

  for (let i = 0; start <= alphabet.length; i++) {
    if (array[i] != alphabet[start]) {
      miss = start
      break
    }
    start = start + 1
  }

  return alphabet[miss]
}

console.log(['a', 'b', 'c', 'd', 'f'][0].charCodeAt(0))

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']))
console.log(findMissingLetter(['a', 'b', 'c', 'd', 'e', 'g']))
console.log(findMissingLetter(['O', 'Q', 'R', 'S']))
