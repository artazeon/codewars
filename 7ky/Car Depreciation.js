function car(p, n) {
  for (let i = 1; i <= n; i++) {
    if (i < 3) {
      p = p - p * 0.2
    } else {
      p = p - p * 0.1
    }
  }
  return p
}

console.log(car(10000, 1))
console.log(car(5681, 2))
console.log(car(8000, 3))
