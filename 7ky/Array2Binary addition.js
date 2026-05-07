function arr2bin(arr) {
  const binArr = arr.every((el) => Number.isInteger(el))
  return binArr ? arr.reduce((acc, el) => acc + el, 0).toString(2) : false
}

console.log(arr2bin([1, 2]))
console.log(arr2bin([1, 'a', 2]))
console.log(arr2bin([1.5, 2, 2.5]))
