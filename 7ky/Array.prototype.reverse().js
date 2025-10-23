Array.prototype.reverse = function () {
  const l = this.length

  for (let i = 0; i < l / 2; i++) {
    const temp = this[i]
    this[i] = this[l - i - 1]
    this[l - i - 1] = temp
  }
  return this
}

console.log([1, 2, 3, 4].reverse())
