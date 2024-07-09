var isMonotone = function (arr) {
  let result = true

  arr.forEach((el, ind) => {
    if (el > arr[ind + 1]) {
      result = false
    }
  })

  return result
}

console.log(isMonotone([1, 1, 2]))
console.log(isMonotone([3, 2, 1]))
