function squareArea(A){
  const d = 4 * A / Math.PI
  return +(d * d / 4).toFixed(2)
}


console.log( squareArea(2) )
console.log( squareArea(14.05) )