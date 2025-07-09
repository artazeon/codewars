function eqSumPowdig(hMax, exp) {
  const res = []

  for (let i = 2; i <= hMax; i++) {
    const digits = i.toString().split('')
    const sumOfPowers = digits.reduce((acc, el) => acc + Math.pow(+el, exp), 0)

    if (sumOfPowers == i) res.push(i)
  }

  return res
}
console.log(eqSumPowdig(200, 3))
