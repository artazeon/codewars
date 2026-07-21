function maxMin(arr1, arr2) {
  const arr3 = arr1.map((el, ind) => Math.abs(el - arr2[ind]))
  return [Math.max(...arr3), Math.min(...arr3)]
}
console.log(maxMin([1, 3, 5], [9, 8, 7]))
