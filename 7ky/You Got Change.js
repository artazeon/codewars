function giveChange(amount) {
  const nominat = [100, 50, 20, 10, 5, 1]
  const res = []

  for (let i = 0; i < nominat.length; i++) {
    const coin = nominat[i]
    const count = Math.trunc(amount / coin)
    res.unshift(count)
    amount -= count * coin
  }

  return res
}

console.log(giveChange(365))
