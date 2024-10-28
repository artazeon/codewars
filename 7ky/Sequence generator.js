function sequence(n, pattern) {
  const result = []
  for (let i = 0; i < n; i++) {
    if (typeof pattern === 'function') {
      result.push(pattern(null, i))
    } else {
      result.push(pattern)
    }
  }
  return result
}

console.log(sequence(3, 4))
console.log(sequence(5, []))
console.log(sequence(5, (x, idx) => idx % 2))
