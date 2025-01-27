function toCurrency(price) {
  const res = []
  const priceArr = String(price).split('').reverse()

  for (let i = 0; i < priceArr.length; i++) {
    if (i > 0 && i % 3 === 0) {
      res.push(',')
    }
    res.push(priceArr[i])
  }

  return res.reverse().join('')
}

console.log(toCurrency('123456'))
console.log(toCurrency('123456789012'))
