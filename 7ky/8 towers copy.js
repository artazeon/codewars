function digitsAverage(input) {
  let arr = input
    .toString()
    .split('')
    .map((el) => +el)
  return arr
}

console.log(digitsAverage(246))
