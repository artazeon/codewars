function positiveSum(arr) {
  return arr.reduce((accum, item) => {
   return item >= 0 ? accum + (item) : accum
  }, 0)

}

console.log(positiveSum([1,-2,3,4,5]))
