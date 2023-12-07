function minSum(arr) {
  let minSum = 0
  
  arr.sort((a, b) => a - b)
  
  for (let i = 0; i < arr.length / 2; i++) {
    minSum += arr[i] * arr[arr.length - i - 1]
  }

  return minSum
}


console.log(minSum([5, 4, 2, 3]))
console.log(minSum([2, 3, 4, 5]))
