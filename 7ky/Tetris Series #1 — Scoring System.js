function getScore(arr) {
  let sumLines = 0
  let sumScore = 0
  let level = 0
  const table = [0, 40, 100, 300, 1200]

  for (const lines of arr) {
    level = Math.floor(sumLines / 10 + 1)
    sumScore += table[lines] * level
    sumLines += lines
  }

  return sumScore
}

console.log(getScore([4, 2, 2, 3, 3, 4, 2]))
