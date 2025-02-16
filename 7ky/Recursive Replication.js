function replicate(times, number, arr = []) {
  if (times <= 0) return arr
  arr.push(number)
  return replicate(times - 1, number, arr)
}
console.log(replicate(3, 5))
console.log(replicate(-1, 12))
