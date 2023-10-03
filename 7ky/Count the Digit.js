function nbDig(n, d) {
  let str = ''

  for (let i = 0; i <= n; i++) {
    str += i * i
  }

  let count = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i] == d) {
      count++
    }
  }

  return count
}

console.log(nbDig(10, 1))
