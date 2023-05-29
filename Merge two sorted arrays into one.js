function mergeArrays(arr1, arr2) {
  const arrNew = arr1.concat(arr2)
  const setArray = new Set(arrNew)
  const retArr = Array.from(setArray)
  return retArr.sort(function(a, b) {
    return a - b;
  })
}

console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]))
