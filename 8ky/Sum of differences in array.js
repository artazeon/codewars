function sumOfDifferences(arr) {
  arr.sort((a, b) => b - a)
  return arr.reduce(
    (acc, el, ind) => (ind < arr.length - 1 ? acc + (el - arr[ind + 1]) : acc),
    0
  )
}

console.log(sumOfDifferences([1, 2, 10]))
