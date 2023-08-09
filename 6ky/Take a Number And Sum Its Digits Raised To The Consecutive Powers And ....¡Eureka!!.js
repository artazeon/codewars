function sumDigPow(a, b) {
  let res = []
  for (let j = a; j <= b; j++) {
    const arr = j.toString().split('')
    let sum = 0
    for (let i = 1; i <= arr.length; i++) {
      sum = sum + Math.pow(arr[i - 1], i)
      if (j === sum) {
        res.push(sum)
      }
    }
  }
  return res
}

console.log(sumDigPow(1, 100))
