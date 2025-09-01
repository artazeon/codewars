function singleDigit(n) {
  if (n < 10) return n

  let bin = n.toString(2)

  while (bin.length > 1) {
    const sum = bin.split('').reduce((acc, el) => acc + Number(el), 0)

    if (sum < 10) return sum

    bin = sum.toString(2)
  }

  return Number(bin)
}
console.log(singleDigit(5))
console.log(singleDigit(999))
console.log(singleDigit(1234444123))
