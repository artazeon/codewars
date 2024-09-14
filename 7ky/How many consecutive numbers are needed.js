function consecutive(array) {
  if (array.length < 2) {
    return 0
  }

  const sortArray = array.sort((a, b) => a - b)
  const missNum =
    sortArray[sortArray.length - 1] - sortArray[0] - sortArray.length + 1

  return missNum
}

console.log(consecutive([4, 8, 6]))
console.log(consecutive([-22, -3, -44, 10, 49, -47]))
console.log(consecutive([]))
console.log(consecutive([1]))
