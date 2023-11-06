function isPowerOfTwo(n) {
  for (let i = 0; n > i; i++) {
    if (Math.pow(2, i) === n) {
      return true
    }
  }

  return false
}

console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(18889465931478580854778))
