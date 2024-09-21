function isPrime(n) {
  if (n < 1) {
    return false
  }

  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false
    }
  }

  return true
}

console.log(isPrime(0))
console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(11))
console.log(isPrime(573))
