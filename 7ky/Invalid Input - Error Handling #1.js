function getCount(words) {
  if (typeof words !== 'string') return { vowels: 0, consonants: 0 }

  const onlyLetters = words.toLowerCase().replace(/[^a-z]/g, '')

  const consonantsLength = onlyLetters
    .toLowerCase()
    .replace(/[aeiou]/gi, '').length
  const vowelsLength = onlyLetters.length - consonantsLength

  const resObj = {
    vowels: vowelsLength,
    consonants: consonantsLength,
  }

  return resObj
}

console.log(getCount('Test'))
