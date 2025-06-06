function mirror(data) {
  const sortedArr = [...data].sort((a, b) => b - a)
  const result = []

  for (let i = 0; i < sortedArr.length; i++) {
    if (i === 0) result.push(sortedArr[0])
    else {
      result.push(sortedArr[i])
      result.unshift(sortedArr[i])
    }
  }

  return result
}

console.log(mirror([-8, 42, 18, 0, -16]), [-16, -8, 0, 18, 42, 18, 0, -8, -16])
console.log(
  mirror([-3, 15, 8, -1, 7, -1]),
  [-3, -1, -1, 7, 8, 15, 8, 7, -1, -1, -3]
)
