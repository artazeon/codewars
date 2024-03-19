function collatz(n) {
  const arr = [n]
  while (n > 1) {
    if (n % 2 === 0) {
      n = n / 2
      arr.push(n)
    } else {
      n = n * 3 + 1
      arr.push(n)
    }
  }

  return arr.length
}

console.log(collatz(20))
