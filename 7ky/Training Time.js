const shuffleIt = (arr, ...exchanges) => {
  exchanges.forEach(([i, j]) => ([arr[i], arr[j]] = [arr[j], arr[i]]))
  return arr
}
console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2]))
console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4]))
