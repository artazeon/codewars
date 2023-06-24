function persistence(num) {
  if (num < 10) return 0

  const product = num
    .toString()
    .split('')
    .reduce((acc, i) => acc * parseInt(i), 1)

  return 1 + persistence(product)
}
console.log(persistence(39))
console.log(persistence(999))
console.log(persistence(14))
