const findSquares = (num) => {
  for (let i = 1; i <= 1000000; i++) {
    let smaller = Math.pow(i, 2)
    let bigger = Math.pow(i + 1, 2)

    if (bigger - smaller === num) {
      return `${bigger}-${smaller}`
    }
  }
}
console.log(findSquares(9))
console.log(findSquares(5))
console.log(findSquares(7))
