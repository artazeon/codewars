function completeSeries(arr) {
  const hasDuplicates = arr.some((el, i) => arr.indexOf(el) !== i)
  if (hasDuplicates) return [0]

  const max = Math.max(...arr)

  return Array.from({ length: max + 1 }, (_, i) => i)
}

console.log(completeSeries([3, 4, 5]))
console.log(completeSeries([1, 4, 4, 6]))
