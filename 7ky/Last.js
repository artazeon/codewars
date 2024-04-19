function last(...list) {
  return arguments
}

console.log(last([1, 2, 3, 4, 5]))
console.log(last(1, 'b', 3, 'd', 5))
console.log(last(1, 'b', 3, 'd', 'e'))
console.log(last('abcde'))
console.log(last(12, 123, 10))
