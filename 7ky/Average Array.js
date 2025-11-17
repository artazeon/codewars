function avgArray(arr) {
  const average = arr.reduce((acc, el, ind) => {
    if (ind === 0) return el.map((item) => item / arr.length)

    return acc.map((item, i) => item + el[i] / arr.length)
  }, [])

  return average
}
console.log(
  avgArray([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
  ]),
  [3, 4, 5, 6]
)
console.log(
  avgArray([
    [2, 3, 9, 10, 7],
    [12, 6, 89, 45, 3],
    [9, 12, 56, 10, 34],
    [67, 23, 1, 88, 34],
  ]),
  [22.5, 11, 38.75, 38.25, 19.5]
)
