var findDigit = function(num, nth){
  const arr = Math.abs(num).toString().split('').reverse()
  return nth < 1 ? -1 : nth > arr.length || nth === 0 ? 0 : +arr[nth-1]
}

console.log(findDigit(5673, 4))
console.log(findDigit(-456, 4))
console.log(findDigit(65, 0))

