function squares(x, n) {
  const arr = []
  for (let i = 1; i <= n; i++) {
    arr.push(x)
    x = Math.pow(x, 2)
  }
  return arr
}

console.log(squares(2, 5))
console.log(squares(2, 0))
