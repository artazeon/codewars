function sequence(x) {
  const arr = []
  for (let i = 1; i <= x; i++) {
    arr.push(i)
  }
  return arr.sort()
}

console.log(sequence(16))
console.log(sequence(9))
