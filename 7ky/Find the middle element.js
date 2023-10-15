function gimme (triplet) {
  const sr = triplet.slice().sort((a, b) => a - b)[1]
  return triplet.indexOf(sr)
}

console.log(gimme([2.1, 3.2, 1.4]))
console.log(gimme([-2, -3, -1]))
console.log(gimme([1.4,2.1,3.2]))
