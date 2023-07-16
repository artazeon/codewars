function tribonacci(signature, n) {
  let arr = []
  if (n >= 3) {
    arr = [...signature]
    for (let i = 0; i < n - 3; i++) {
      arr.push(arr[arr.length - 3] + arr[arr.length - 2] + arr[arr.length - 1])
    }
  } else if (n < 3) {
    for (let i = 0; i < n; i++) {
      arr.push(signature[i])
    }
  }

  return arr
}

console.log(tribonacci([1, 1, 1], 1))
