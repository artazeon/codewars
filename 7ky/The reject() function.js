const reject = (array, predicate) => array.filter((el) => !predicate(el))

console.log(
  reject([1, 2, 3, 4, 5, 6], function (num) {
    return num % 2 == 0
  })
)
