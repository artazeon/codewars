function squareSum(numbers){
  return numbers.reduce((accum, item)=> accum + Math.pow(item, 2),0)
  }