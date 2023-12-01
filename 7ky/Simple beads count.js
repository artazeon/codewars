function countRedBeads(n) {
  let count = 0
  for (let i = 0; i <= n - 2; i++) {
    count = n + i
  }
  return count
}

console.log(countRedBeads(0)) // 0
console.log(countRedBeads(1)) // 0
console.log(countRedBeads(2)) // 2 n
console.log(countRedBeads(3)) // 4 n+1
console.log(countRedBeads(4)) // 6 n+2
console.log(countRedBeads(5)) // 8 n+3
console.log(countRedBeads(6)) // 10 n+4
