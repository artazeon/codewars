function largestPairSum (numbers) {
  const sortedNumber = numbers.sort((a,b)=>b-a)
  return sortedNumber[0]+sortedNumber[1]
}

console.log(largestPairSum([10,14,2,23,19]))
