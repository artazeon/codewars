function sumOrProduct(array, n) {
  const sortedArr = [...array].sort((a, b) => a - b)

  const max = sortedArr.slice(-n).reduce((acc, el) => acc + el, 0)
  const min = sortedArr.slice(0, n).reduce((acc, el) => acc * el, 1)

  return max === min ? 'same' : max > min ? 'sum' : 'product'
}

console.log(sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4))
console.log(sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3))
console.log(sumOrProduct([10, 20, 3, 30, 5, 4], 3))
