var buy = function (x, arr) {
  const index = []

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === x && index.length < 2) {
        index.push(i)
        index.push(j)
      }
    }
  }
  return index.length < 1 ? null : index
}
console.log(buy(5, [5, 2, 3, 4, 5]))
console.log(buy(2, [1, 1]), [0, 1])
console.log(buy(3, [1, 1]), null)
console.log(buy(5, [5, 2, 3, 4, 5]), [1, 2])
console.log(buy(5, [1, 2, 3, 4, 5]), [0, 3])
console.log(buy(5, [0, 0, 0, 2, 3]), [3, 4])
