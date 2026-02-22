function getLastDigit(index) {
  if (index <= 1) return 1

  let a = 1
  let b = 1

  for (let i = 2; i < index; i++) {
    ;[a, b] = [b, (a + b) % 10]
  }

  return b
}

console.log(getLastDigit(193150))
