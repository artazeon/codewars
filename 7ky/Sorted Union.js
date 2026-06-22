function uniteUnique(...arr) {
  return [...new Set(arr.flat(Infinity))]
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4])
