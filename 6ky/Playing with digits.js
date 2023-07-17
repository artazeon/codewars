function digPow(n, p) {
  const arr = n.toString().split('')
  let k = 0

  for (let i = 0; i < arr.length; i++, p++) {
    k = k + Math.pow(arr[i], p)
  }

  return k % n === 0 ? k / n : -1
}

console.log(digPow(89, 1))
console.log(digPow(92, 1))
console.log(digPow(695, 2))
console.log(digPow(46288, 3))
