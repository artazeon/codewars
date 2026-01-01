const comfortableWord = (word) => {
  const left = 'qwertasdfgzxcvb'
  const right = 'yuiophjklnm'

  let prevHand = null

  for (let i = 0; i < word.length; i++) {
    const ch = word[i]

    const currentHand = left.includes(ch)
      ? 'L'
      : right.includes(ch)
      ? 'R'
      : null

    if (prevHand && currentHand === prevHand) {
      return false
    }

    prevHand = currentHand
  }

  return true
}

console.log(comfortableWord('yams'))
console.log(comfortableWord('test'))
console.log(comfortableWord('jokin'))
