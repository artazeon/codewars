function checkConcatenatedSum(num, count) {
  const res = Math.abs(num)
    .toString()
    .split('')
    .map((el) => el.repeat(count))
    .reduce((acc, el) => acc + +el, 0)

  return num < 0 ? -res === num : res === num
}

console.log(checkConcatenatedSum(198, 2))
console.log(checkConcatenatedSum(2997, 3))
console.log(checkConcatenatedSum(-2997, 3))
