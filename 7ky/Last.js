function last(...list) {
  const str = list.join(',').split(',')

  const res = !isNaN(parseInt(str[str.length - 1]))
    ? +str[str.length - 1]
    : str[str.length - 1]

  return typeof res === 'string' ? res[[res.length - 1]] : res
}

console.log(last([1, 2, 3, 4, 5]))
console.log(last(1, 'b', 3, 'd', 5))
console.log(last(1, 'b', 3, 'd', 'e'))
console.log(last('abcde'))
console.log(last(12, 123, 10))
