String.prototype.myNewMethod = function () {
  return this.toUpperCase()
}

console.log('abc'.myNewMethod())
