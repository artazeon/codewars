Array.prototype.square = function () {
  return this.map((i) => Math.pow(i, 2))
}

Array.prototype.cube = function () {
  return this.map((i) => Math.pow(i, 3))
}

Array.prototype.average = function () {
  if (this.length === 0) {
    return NaN
  }
  return this.reduce((acc, i) => {
    return acc + i / this.length
  }, 0)
}

Array.prototype.sum = function () {
  if (this.length === 0) {
    return NaN
  }
  return this.reduce((acc, i) => {
    return acc + i
  }, 0)
}
Array.prototype.even = function () {
  return this.filter((i) => {
    if (i % 2 === 0) return i
  })
}
Array.prototype.odd = function () {
  return this.filter((i) => {
    if (i % 2 != 0) return i
  })
}
const numbers = []

console.log(numbers.square())
console.log(numbers.cube())
console.log(numbers.average())
console.log(numbers.sum())

console.log(numbers.even())
console.log(numbers.odd())
