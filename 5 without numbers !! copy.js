function squareOrSquareRoot(array) {
  return array.map((i) => {
    if (Number.isInteger(Math.sqrt(i))) {
      return Math.sqrt(i)
    } else {
      return Math.pow(i, 2)
    }
  })
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]))
