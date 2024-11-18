function isItANum(str) {
  const fix = str
    .split('')
    .filter((el) => !isNaN(parseInt(el, 10)))
    .join('')

  return fix[0] == 0 && fix.length === 11 ? fix : 'Not a phone number'
}

console.log(isItANum('S:)0207ERGQREG88349F82!efRF)'))
console.log(isItANum('0192387415456'))
