function isAllPossibilities(x) {
  x.sort((a, b) => a - b)

  for (let i = 0; i <= x.length - 1; i++) {
    if (x[i] != i) return false
  }
  return true
}

console.log(isAllPossibilities([0, 1, 2, 3]))
console.log(isAllPossibilities([1, 2, 3, 4]))
console.log(isAllPossibilities([2]))
