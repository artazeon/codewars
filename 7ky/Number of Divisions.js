const divisions = (n, divisor) => {
  let count = 0
  while (n >= divisor) {
    n = Math.floor(n / divisor)
    console.log(n)
    count++
  }
  return count
}

console.log(divisions(6, 2))
console.log(divisions(100, 2))
console.log(divisions(2450, 5))
