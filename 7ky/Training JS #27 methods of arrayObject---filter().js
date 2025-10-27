function countGrade(scores) {
  const result = {
    S: scores.filter((x) => x === 100).length,
    A: scores.filter((x) => x < 100 && x >= 90).length,
    B: scores.filter((x) => x < 90 && x >= 80).length,
    C: scores.filter((x) => x < 80 && x >= 60).length,
    D: scores.filter((x) => x < 60 && x >= 0).length,
    X: scores.filter((x) => x === -1).length,
  }

  return result
}

console.log(countGrade([50, 60, 70, 80, 90, 100]), {
  S: 1,
  A: 1,
  B: 1,
  C: 2,
  D: 1,
  X: 0,
})
