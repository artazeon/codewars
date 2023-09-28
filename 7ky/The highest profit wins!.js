function minMax(arr){
  const sortArr = arr.sort((a, b) => a - b)
  const min = sortArr[0]
  const max = sortArr[sortArr.length - 1]
  return [min, max]
}

console.log(minMax([1, 3, 2, 4, 5]))

