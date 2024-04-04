function multiples(m, n) {
  const arr = []
  let multiple = n

  for (let i = 1; arr.length < m; i++) {
    arr.push(multiple)
    multiple += n
  }

  return arr
}

console.log(multiples(3, 5))
