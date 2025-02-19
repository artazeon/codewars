function nextPrime(n) {
  let next = n + 1

  while (!isPrime(next)) {
    next++
  }

  return next
}

function isPrime(num) {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return true
}

console.log(nextPrime(0), 2)
console.log(nextPrime(1), 2)
console.log(nextPrime(2), 3)
console.log(nextPrime(3), 5)
console.log(nextPrime(5), 7)
console.log(nextPrime(11), 13)
console.log(nextPrime(17), 19)
console.log(nextPrime(2971), 2999)
