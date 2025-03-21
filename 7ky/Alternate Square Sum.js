function alternateSqSum(arr) {
  const sum = arr.reduce((acc, el, ind) => {
    return ind % 2 ? acc + el ** 2 : acc + el
  }, 0)

  return sum
}

console.log(alternateSqSum([]))
console.log(alternateSqSum([1, 2, 3, 4, 5]))
