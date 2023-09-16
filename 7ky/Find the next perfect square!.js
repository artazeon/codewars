function findNextSquare(sq) {
  const sqrt = Math.sqrt(sq)



  return Number.isInteger(sqrt) ? Math.pow(sqrt+1, 2) : -1 
}

console.log(findNextSquare(121))
console.log(findNextSquare(155))
