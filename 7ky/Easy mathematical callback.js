function processArray(arr, callback) {
  const res = arr.map((el) => callback(el))
  return res
}

console.log(processArray([4, 8, 2, 7, 5], (n) => n * 2))
