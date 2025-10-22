function elementsSum(arr, d = 0) {
  const l = arr.length - 1
  return arr.reduce((acc, el, ind) => {
    const needInd = l - ind
    const value = el[needInd] !== undefined ? el[needInd] : d
    return acc + value
  }, 0)
}

console.log(
  elementsSum([
    [3, 2, 1, 0],
    [4, 6, 5, 3, 2],
    [9, 8, 7, 4],
  ]),
  16
)
console.log(elementsSum([[3], [4, 6, 5, 3, 2], [9, 8, 7, 4]]), 15)
console.log(elementsSum([[3, 2, 1, 0], [4, 6, 5, 3, 2], []]), 7)
console.log(elementsSum([[3, 2, 1, 0], [4, 6, 5, 3, 2], []], 5), 12)
console.log(elementsSum([[3, 2], [4], []]), 0)
