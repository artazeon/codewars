function countZeros(n) {
  const arr = Array.from({ length: n }, (_, index) => index + 1)

  return arr
    .join('')
    .split('')
    .filter((num) => num === '0').length
}
console.log(countZeros(200))
