function one(arr, fun) {
  const res = arr.filter((el) => fun(el))

  return res.length === 1
}

console.log(
  one([1, 2, 3, 4, 5], function (item) {
    return item < 2
  })
)
console.log(
  one([1, 2, 3, 4, 5], function (item) {
    return item % 2
  })
)
console.log(
  one([1, 2, 3, 4, 5], function (item) {
    return item > 5
  })
)
