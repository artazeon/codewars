function roundToNext5(n) {
  for (let i = 0; n % 5 != 0; i++) {
    n++
  }

  return n
}

console.log(roundToNext5(21))
console.log(roundToNext5(-2))
