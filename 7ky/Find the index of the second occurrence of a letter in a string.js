function secondSymbol(s, symbol) {
  let count = 0
  let findInd = -1

  for (let i = 0; i < s.length; i++) {
    if (s[i] === symbol) {
      count++
    }
    if (count === 2) {
      findInd = i
      break
    }
  }
  return findInd
}

console.log(secondSymbol('Hello world!!!', 'l'))
