function withoutLast(arr) {
  const newArr = arr
  newArr.pop() // removes the last element
  return newArr
}

console.log(withoutLast([1, 2, 3, 4, 5]))
console.log(withoutLast([27, 57, 19, 12, 27, 21, 66, 24, 15, 81, 24, 91, 93]))

// [ 27, 57, 19, 12, 27, 21, 66, 24, 15, 81, 24, 91 ]
// [ 27, 57, 19, 12, 27, 21, 66, 24, 15, 81, 24 ]
