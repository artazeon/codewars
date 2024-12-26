const lengthOfSequence = (arr, n) => {
  const newArr = arr.join('').split(n)
  if (newArr.length !== 3) return 0
  const res = newArr[1].replace(/-/g, '')
  return res.length + 2
}

console.log(lengthOfSequence([0, -3, 7, 4, 0, 3, 7, 9], 7))
console.log(lengthOfSequence([0, 8, -7, 6, 1, 2, -7, 4, 8, 9], 8))
