function factorial(n) {
  let result = n
  for (let i = n - 1; i > 0; i--) {
    result = result * i
  }
  return n > 0 ? result : 1
}

console.log(factorial(5))
console.log(factorial(0))
