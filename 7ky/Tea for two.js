function tea42(input) {
  return input
    .toString()
    .split('')
    .map((el) => (el == '2' ? 't' : el))
    .join('')
}

console.log(tea42('pre2ty'))
console.log(tea42(2))
