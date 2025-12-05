function ArithmeticSequenceSum(a, r, n) {
  const arr = [a]

  for (let i = 1; i < n; i++) {
    arr.push(arr[i - 1] + r)
  }

  return arr.reduce((acc, el) => acc + el, 0)
}

console.log(ArithmeticSequenceSum(2, 3, 5))
