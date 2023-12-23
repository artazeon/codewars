function maxTriSum(numbers) {
  const uniqArr = [...new Set(numbers)]
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((acc, el) => acc + el, 0)
  return uniqArr
}

console.log(maxTriSum([3, 2, 6, 8, 2, 3]))
