function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
    return []
  } else {
    return input.reduce(
      (accum, item) => {
        if (item >= 1) {
          accum[0] += 1
        } else if (item === 0) {
          accum
        } else {
          accum[1] += item
        }

        return accum
      },
      [0, 0]
    )
  }
}

console.log(
  countPositivesSumNegatives(null)
)
