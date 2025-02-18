function solve(arr) {
  const resArr = []
  let max = -Infinity

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > max) {
      resArr.push(arr[i])
      max = arr[i]
    }
  }

  return resArr.reverse()
}

console.log(solve([16, 17, 14, 3, 14, 5, 2]), [17, 14, 5, 2])
console.log(solve([92, 52, 93, 31, 89, 87, 77, 105]), [105])
