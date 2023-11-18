function vowelIndices(word) {
  const vowels = 'aeiouyAEIOUY'

  const vowelsIndex = word
    .split('')
    .map((el, ind) => {
      if (vowels.includes(el)) {
        return ind + 1
      }
    })
    .filter((el) => el !== undefined)

  return vowelsIndex
}

console.log(vowelIndices('apple'))
console.log(vowelIndices('YslPwqiKZFQeTXdkTbwKHkHjYi'))
