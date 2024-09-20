function candies(kids) {
  if (kids.length <= 1) return -1

  const maxCandies = Math.max(...kids)
  const newCandies = Array(kids.length).fill(maxCandies)

  const sum = (arr) => arr.reduce((acc, el) => acc + el, 0)

  const sumBefore = sum(kids)
  const sumAfter = sum(newCandies)

  return sumAfter - sumBefore
}

console.log(candies([5, 8, 6, 4]))
