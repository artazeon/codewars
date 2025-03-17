function minMinMax(array) {
  const sortArr = array.sort((a, b) => a - b)
  const smallest = sortArr[0]
  const largest = sortArr[sortArr.length - 1]

  for (let i = smallest + 1; i < largest; i++) {
    if (!sortArr.includes(i)) {
      return [smallest, i, largest]
    }
  }
}

console.log(minMinMax([-1, 4, 5, -23, 24]))
console.log(minMinMax([1, 3, -3, -2, 8, -1]))
