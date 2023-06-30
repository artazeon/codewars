var uniqueInOrder = function (iterable) {
  const arr = Array.isArray(iterable)
    ? iterable.map(String)
    : iterable.split('')

  const fArr = arr.filter((item, index) => {
    return item != arr[index + 1]
  })
  
  return Array.isArray(iterable) ? fArr.map((str) => Number.isNaN(parseInt(str)) ? str : parseInt(str)) : fArr
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder([1, 2, 2, 3, 3]))
console.log(uniqueInOrder([ 'a', 'b', 'b' ]))
