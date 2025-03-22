function dative(word) {
  const backVowel = ['a', 'á', 'o', 'ó', 'u', 'ú']
  const fArr = word.split('').filter((el) => backVowel.includes(el))
  return fArr.length ? word + 'nak' : word + 'nek'
}

console.log(dative('ablak'))
