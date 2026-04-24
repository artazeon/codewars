function perfectRoots(n) {
  for (let i = 1; i <= 3; i++) {
    n = Math.sqrt(n)
    if (!Number.isInteger(n)) return false
  }
  return true
}

console.log(perfectRoots(256))
console.log(perfectRoots(1000))
