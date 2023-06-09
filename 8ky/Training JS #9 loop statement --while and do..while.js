function padIt(str, n) {
  let num = 1

  while (num <= n) {
    num++ % 2 == 1 ? (str = '*' + str) : (str += '*')
  }

  return str
}

console.log(padIt('a', 2))
console.log(padIt('a', 5))
