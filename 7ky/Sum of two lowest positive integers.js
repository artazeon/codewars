function sumTwoSmallestNumbers(numbers) {  
  numbers.sort((a, b) => a - b)
  return numbers[0]+numbers[1]
}

console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]))
