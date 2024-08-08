function isNice(arr) {
  let res = true

  for (let i = 0; i < arr.length; i++) {
    if (!(arr.includes(arr[i] + 1) || arr.includes(arr[i] - 1))) {
      res = false
    }
  }

  return arr.length ? res : false
}

console.log(isNice([2, 10, 9, 3]))
console.log(isNice([33, 4, 5, 77]))
console.log(isNice([]))
