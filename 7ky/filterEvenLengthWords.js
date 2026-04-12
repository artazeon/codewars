function filterEvenLengthWords(words) {
  return words.filter((el) => el.length % 2 === 0)
}

console.log(filterEvenLengthWords(['One', 'Two', 'Three', 'Four']))
