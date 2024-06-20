function spoonerize(words) {
  const arr = words.split(' ')

  const fWord = arr[0]
  const sWord = arr[1]

  const newFWord = sWord[0] + fWord.slice(1)
  const newSWord = fWord[0] + sWord.slice(1)

  return newFWord + ' ' + newSWord
}
console.log(spoonerize('nit picking'))
