function getMatrix(number) {
  const matrix = []

  for (let i = 0; i < number; i++) {
    const arr = []
    for (let j = 0; j < number; j++) {
      j === i ? arr.push(1) : arr.push(0)
    }
    matrix.push(arr)
  }

  return matrix
}

console.log(getMatrix(0))
console.log(getMatrix(1))
console.log(getMatrix(2))
console.log(getMatrix(3))
