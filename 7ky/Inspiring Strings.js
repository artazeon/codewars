function longestWord(stringOfWords) {
  const arr = stringOfWords.split(' ').sort((a, b) => b.length - a.length)
  const fArr = arr.filter((el) => el.length >= arr[0].length)
  return fArr[fArr.length - 1]
}

console.log(longestWord('lonely'), 'lonely')
console.log(longestWord('a pair'), 'pair')
console.log(longestWord('a b c d e fgh'), 'fgh')
console.log(longestWord('one two three'), 'three')
console.log(longestWord('red blue grey'), 'grey')
