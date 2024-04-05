function capitalize(s, arr) {
  const wordArr = s.split('')

  const newWords = wordArr.map((el, ind) =>
    arr.includes(ind) ? el.toUpperCase() : el
  )

  return newWords.join('')
}
console.log(capitalize('abcdef', [1, 2, 5]))
