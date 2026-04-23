function getTheVowels(word) {
  let vowelsWord = word.replace(/[^aeiou]/g, '')
  const vowels = 'aeiou'

  let index = 0
  let count = 0

  for (let i = 0; i < vowelsWord.length; i++) {
    if (vowelsWord[i] === vowels[index]) {
      count++
      index++

      if (index === vowels.length) {
        index = 0
      }
    }
  }
  return count
}
console.log(getTheVowels('agrtertyfikfmroyrntbvsukldkfa'))
