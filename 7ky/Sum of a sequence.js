const sequenceSum = (begin, end, step) => {
  let sum = 0

  for (let i = begin; i <= end; i=i+step) {
    sum = sum + i
  }
  return sum
}

console.log(sequenceSum(2, 6, 2))
console.log(sequenceSum(1, 5, 1))
console.log(sequenceSum(1, 5, 3))
