function climb(n) {
  const arr = []

  while (n > 0) {
    arr.push(n)
    n = Math.floor(n / 2)
  }

  return arr.reverse()
}

console.log(climb(1))
console.log(climb(10))
console.log(climb(13))
