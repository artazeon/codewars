function addArrays(array1, array2) {
  if (array1.length !== array2.length) {
    throw new Error('Arrays must be of equal length')
  }

  return array1.map((el, ind) => el + array2[ind])
}

console.log(addArrays([1, 2], [4, 5]))
console.log(addArrays([1, 2, 3], [4, 5]))
