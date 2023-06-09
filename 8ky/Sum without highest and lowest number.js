function sumArray(array) {
  console.log(Array.isArray(array))

  if (Array.isArray(array) && array.length > 2) {
    const max = Math.max.apply(null, array)
    const min = Math.min.apply(null, array)
    const sum = array.reduce((a, i) => {
      return a + i
    }, 0)
    return sum - max - min
  } else {
    return 0
  }
}

console.log(sumArray(null))
