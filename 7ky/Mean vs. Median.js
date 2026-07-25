function meanVsMedian(numbers) {
  const mean = numbers.reduce((a, b) => a + b) / numbers.length
  const arr = [...numbers].sort((a, b) => a - b)
  const mid = arr.length / 2
  const median =
    arr.length % 2 ? arr[Math.floor(mid)] : (arr[mid - 1] + arr[mid]) / 2

  return mean > median ? 'mean' : mean < median ? 'median' : 'same'
}

console.log(meanVsMedian([1, 1, 1]))
console.log(meanVsMedian([1, 2, 37]))
console.log(meanVsMedian([7, 14, -70]))
