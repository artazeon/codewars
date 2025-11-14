function cyclops(n) {
  const str = n.toString(2)

  if (str.length % 2 === 0) return false

  const middle = str[Math.floor(str.length / 2)]
  const leftSide = str.slice(0, Math.floor(str.length / 2))
  const rightSide = str.slice(Math.floor(str.length / 2) + 1)

  for (let i = 0; i < leftSide.length; i++) {
    if (leftSide[i] != "1" || rightSide[i] != "1") {
      return false
    }
  }

  return middle == "0" ? true : false
}

console.log(cyclops(5))
console.log(cyclops(6))
console.log(cyclops(27))
console.log(cyclops(2096126))
