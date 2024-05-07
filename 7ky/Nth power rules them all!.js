function modifiedSum(a, n) {
  const newArrSumm = a.reduce((ac, el) => ac + Math.pow(el, n), 0)
  const oldArrSumm = a.reduce((ac, el) => ac + el)

  return newArrSumm - oldArrSumm
}

console.log(modifiedSum([1, 2, 3], 3))
