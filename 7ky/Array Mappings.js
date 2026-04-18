Array.prototype.map = function (callback, thisArg) {
  const result = new Array(this.length)

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      result[i] = callback.call(thisArg, this[i], i, this)
    }
  }

  return result
}

console.log([1, 2, 3].map((x) => x ** 2))
