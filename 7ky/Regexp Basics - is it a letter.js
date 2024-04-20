String.prototype.isLetter = function () {
  return /^[a-zA-Z]$/.test(this)
}
console.log('a'.isLetter())
console.log('1'.isLetter())
