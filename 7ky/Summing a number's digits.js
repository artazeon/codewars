function sumDigits(number) {
  const arr = Math.abs(number).toString().split('')
  const sum = arr.reduce((ac, el)=> {return ac + +el}, 0) 
  return sum
}

console.log(sumDigits(-32))
