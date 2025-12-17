function median(array) {
  const sortedArr = array.slice().sort((a, b) => a - b)
  const middle = Math.floor(sortedArr.length / 2)

  if (sortedArr.length % 2) {
    return sortedArr[middle]
  } else {
    return (sortedArr[middle - 1] + sortedArr[middle]) / 2
  }
}
console.log(median([3, 2, 1]), 2)
console.log(median([33, 99, 100, 30, 29, 50]), 41.5)
