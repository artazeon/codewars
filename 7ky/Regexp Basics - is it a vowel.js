String.prototype.vowel = function () {
  const vowel = /^[aeiou]$/i
  return vowel.test(this)
}

const letter = 'a'

console.log(String.prototype.vowel(letter))
