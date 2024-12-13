function powerOf4(n) {
  if (n <= 0 || !Number.isInteger(n)) return false

  while (n > 1) {
    if (n % 4 !== 0) {
      return false
    }
    n /= 4
    s
  }

  return true
}
console.log(powerOf4(4))
console.log(powerOf4(16))
console.log(powerOf4(1024))
console.log(powerOf4(44))
