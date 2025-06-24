function findArray(arr1, arr2) {
  return arr2.length > arr1.length ? [] : arr2.map((el, ind) => arr1[el])
}

console.log(findArray(['a', 'a', 'a', 'a', 'a'], [2, 4]))
console.log(findArray([0, 1, 5, 2, 1, 8, 9, 1, 5], [1, 4, 7]))
console.log(findArray([1, 2, 3], []))
