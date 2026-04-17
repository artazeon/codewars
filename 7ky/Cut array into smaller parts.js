function makeParts(arr, chunkSize) {
  const res = []

  while (arr.length > 0) {
    res.push(arr.splice(0, chunkSize))
  }

  return res
}

console.log(makeParts([1, 2, 3, 4, 5], 2))
console.log(makeParts([1, 2, 3, 4, 5], 10))
