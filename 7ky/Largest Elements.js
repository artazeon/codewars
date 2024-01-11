function largest(n, array) {
  const res = []
  array.sort((a, b) => b - a)
  for (let i = 0; i < n; i++) {
    res.unshift(array.shift())
  }

  return res
}

console.log(largest(2, [1, 3, 7, 6, 5, 4, 3, 2, 1]))
console.log(largest(2, [-3, -2, -1, 0, -9, -8, -7, -6, -4, -5]))
