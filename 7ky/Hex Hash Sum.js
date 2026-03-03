function hexHash(code) {
  const hex = code
    .split('')
    .map((letter) => letter.charCodeAt(0).toString(16).replace(/[a-f]/gi, ''))
    .join('')
    .split('')

  const sum = hex.reduce((acc, num) => acc + +num, 0)

  return sum
}
console.log(hexHash('Yo'))
