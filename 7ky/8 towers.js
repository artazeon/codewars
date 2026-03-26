function towerCombination(n) {
  let result = 1n
  for (let i = 2n; i <= BigInt(n); i++) {
    result *= i
  }
  return result
}
console.log(towerCombination(3))
console.log(towerCombination(18))
