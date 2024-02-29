function maxProduct(numbers, size) {
  const sortArr = numbers.sort((b, a) => a - b).slice(0, size)
  return sortArr.reduce((acc, el) => acc * el, 1)
}

console.log(maxProduct([4, 3, 5], 2))
