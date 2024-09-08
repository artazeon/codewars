function arithmeticSequenceElements(a, d, n) {
  let arr = []
  for (let i = a; arr.length < n; i = i + d) {
    arr.push(i)
  }
  return arr.join(', ')
}

console.log(arithmeticSequenceElements(1, 2, 5))
