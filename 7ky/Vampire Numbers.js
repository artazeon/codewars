function vampireTest(a, b) {
  if (a < 0 && b < 0) {
    return false
  }
  const strMult = String(Math.abs(a * b))
  const strSum = String(Math.abs(a)) + String(Math.abs(b))

  const sort = (str) =>
    str
      .split('')
      .sort((a, b) => a - b)
      .join('')

  return sort(strMult) === sort(strSum)
}

console.log(vampireTest(21, 6))
console.log(vampireTest(204, 615))
console.log(vampireTest(30, -51))
console.log(vampireTest(-246, -510))
