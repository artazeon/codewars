function generateRange(min, max, step){

  let arr = []

  for (i = min; i <= max; i += step) {
    arr.push(i)
  }
  return arr
}


console.log( generateRange(2, 10, 2) )