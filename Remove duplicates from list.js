function distinct(a) {
  const newSet = new Set(a)
  const newArr = Array.from(newSet)
  return newArr

}

console.log( distinct([1,1,2]) )