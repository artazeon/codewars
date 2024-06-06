function alternate(n, firstValue, secondValue) {
  const arr = []
  for (let i = 0; i < n; i++) {
    i % 2 != 0 ? arr.push(secondValue) : arr.push(firstValue)
  }
  return arr
}
console.log(alternate(20, 'blue', 'red'))
