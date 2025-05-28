function processData(data) {
  return data.map((el) => el[0] - el[1]).reduce((acc, el) => acc * el, 1)
}

console.log(
  processData([
    [2, 5],
    [3, 4],
    [8, 7],
  ])
)
