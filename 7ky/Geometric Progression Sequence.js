function geometricSequenceElements(a, r, n) {
  let arr = [a]

  for (let i = 0; i < n - 1; i++) {
    arr.push(arr[i] * r)
  }
  return arr
}

console.log(geometricSequenceElements(2, 3, 5))
