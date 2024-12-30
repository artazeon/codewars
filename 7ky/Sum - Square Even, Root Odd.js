const sumSquareEvenRootOdd = (ns) => {
  const sqArr = ns.map((el) => (el % 2 == 0 ? Math.pow(el, 2) : Math.sqrt(el)))
  const sumArr = sqArr.reduce((acc, el) => acc + el, 0)

  return sumArr.toFixed(2)
}
console.log(sumSquareEvenRootOdd([4, 5, 7, 8, 1, 2, 3, 0]))
