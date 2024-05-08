function betweenExtremes(numbers) {
  const sort = numbers.sort((a, b) => a - b)
  return sort[sort.length - 1] - sort[0]
}

console.log(betweenExtremes([-1, -41, -77, -100]))
