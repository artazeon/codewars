function countConsonants(str) {
  const arr = str
    .toLowerCase()
    .replace(/[^bcdfghjklmnpqrstvwxyz]/gi, '')
    .split('')

  const unique = [...new Set(arr)]

  return unique.length
}

console.log(countConsonants('adD'))
console.log(countConsonants('Count my unique consonants!!'))
