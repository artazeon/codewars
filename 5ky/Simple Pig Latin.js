function pigIt(str) {
  const arr = str.split(' ')
  const newArr = arr.map((word) => {
    const fLet = word.charAt(0)
    if (fLet.match(/[a-zA-Z]/)) {
      const restStr = word.slice(1)
      const newStr = restStr.concat(fLet)
      return newStr + 'ay'
    }
    return word
  })
  return newArr.join(' ')
}

console.log(pigIt('Pig latin is cool'))
