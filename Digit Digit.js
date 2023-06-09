function squareDigits(num) {
  const newArr = String(num).split('')
  const qvArr = newArr.map((i) => Math.pow(+i, 2))
  return qvArr.join('')
}

console.log(squareDigits(3212))
