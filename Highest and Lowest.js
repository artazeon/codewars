function highAndLow(numbers) {
  const arr = numbers.split(' ')
  const sortArr = arr.sort(function compareNumbers(a, b) {
    return a - b
  })
  return `${sortArr[sortArr.length - 1]} ${sortArr[0]}`
}

console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'))
