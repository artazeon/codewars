function nthChar(words) {
  let word = ''

  words.forEach((element, ind) => (word += element[ind]))

  return word
}

console.log(nthChar(['yoda', 'best', 'has']))
