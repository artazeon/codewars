function findAverage(array) {
  if (array.length === 0) {
    return 0
  } else {
    const sum = array.reduce((accum, item) => {
      return accum + item
    }, 0)
    return sum / array.length
  }
}

console.log(findAverage([]))
