function closest(arr) {
  const unique = [...new Set(arr)]
  const sorted = unique.sort((a, b) => Math.abs(a) - Math.abs(b))

  if (sorted[0] === sorted[1]) return sorted[0]
  if (Math.abs(sorted[0]) === Math.abs(sorted[1])) return null

  return sorted[0]
}

console.log(closest([2, 4, -1, -3]))
console.log(closest([-32, -32, -73, 32]))
