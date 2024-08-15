const filterLongWords = (sentence, n) =>
  sentence.split(' ').filter((el) => el.length > n)

console.log(filterLongWords('The quick brown fox jumps over the lazy dog', 4))
