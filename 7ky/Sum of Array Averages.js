const sumAverage = (arr) => {
  const res = arr.reduce(
    (acc, el) =>
      acc + el.reduce((subAcc, subEl) => subAcc + subEl / el.length, 0),
    0
  )
  return Math.floor(res)
}

console.log(
  sumAverage([
    [3, 4, 1, 3, 5, 1, 4],
    [21, 54, 33, 21, 77],
  ])
)
