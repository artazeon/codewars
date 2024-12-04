function solve(arr) {
  const sortedArr = [...arr].sort((a, b) => b - a)
  let result = []

  for (let i = 0; i < Math.ceil(sortedArr.length / 2); i++) {
    result.push(sortedArr[i])
    if (i !== sortedArr.length - 1 - i) {
      result.push(sortedArr[sortedArr.length - 1 - i])
    }
  }

  return result
}

console.log(solve([15, 11, 10, 7, 12])) // [15, 7, 12, 10, 11]
