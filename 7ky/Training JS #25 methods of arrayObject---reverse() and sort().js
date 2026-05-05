function sortIt(arr) {
  const count = {}

  for (let num of arr) {
    count[num] = (count[num] || 0) + 1
  }

  return [...arr].sort((a, b) => {
    if (count[a] !== count[b]) {
      return count[a] - count[b]
    }
    return b - a
  })
}
console.log(sortIt([1, 1, 1, 2, 2, 3]))
