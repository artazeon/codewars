function lastDigit(n, d) {
  return d <= 0 ? [] : Array.from(String(n), Number).slice(-d)
}

console.log(lastDigit(123767, 4))
console.log(lastDigit(34625647867585, 10))
