const intDiff = (arr, n) => {
  if (n < 0) return 0

  let count = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[j] - arr[i]) === n) {
        count++
      }
    }
  }

  return count
}
// console.log(intDiff([1, 1, 5, 6, 9, 16, 27], 4))
// console.log(intDiff([1, 1, 3, 3], 2))
console.log(intDiff([1, 6, 2, 3, 7, 8, 7], 0))
console.log(intDiff([4, 8, 12, 12, 3, 6, 2], 6))
