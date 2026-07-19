function countCorrectCharacters(correctWord, guess) {
  if (correctWord.length !== guess.length)
    throw new Error('Different word lengths')
  let result = 0

  for (let i = 0; i < guess.length; i++) {
    if (correctWord[i] === guess[i]) {
      result++
    }
  }

  return result
}

console.log(countCorrectCharacters('dog', 'car'))
console.log(countCorrectCharacters('len', 'lengh'))
