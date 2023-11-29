function adjacentElementsProduct(array) {
  let max = -Infinity

  array.forEach((el, index) => {
    const tempResult = el * array[index - 1]
    if (tempResult >= max) {
      max = tempResult
    }
  })

  return max
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]))
console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]))
