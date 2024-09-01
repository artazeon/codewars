function houseNumbersSum(inputArray) {
  const stopInd = inputArray.findIndex((el) => el === 0)
  const housesСount = inputArray.slice(0, stopInd)
  const sum = housesСount.reduce((acc, el) => acc + el, 0)

  return sum
}
console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]))
