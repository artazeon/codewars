function titleCase(title, minorWords = '') {
  const minorWordArr = minorWords.toLowerCase().split(' ')
  const titleArr = title
    .toLowerCase()
    .split(' ')
    .map((word, index) => {
      if (index === 0) {
        return word.charAt(0).toUpperCase() + word.slice(1)
      }

      if (!minorWordArr.includes(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1)
      } else {
        return word
      }
    })

  return titleArr.join(' ')
}

console.log(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
console.log(
  titleCase('THE WIND IN THE WILLOWS', 'The In'),
  'The Wind in the Willows'
)
console.log(titleCase('the quick brown fox'), 'The Quick Brown Fox')
