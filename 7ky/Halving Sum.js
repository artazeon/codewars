function halvingSum(n) {
  let sum = 0

  for (let i = 0; n >= 1; i++) {
    sum += n
    n = Math.floor(n / 2)
  }

  return sum
}

console.log(halvingSum(25))
console.log(halvingSum(127))
