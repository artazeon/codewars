function computerToPhone(numbers) {
  const keypadMap = { 1: '7', 2: '8', 3: '9', 7: '1', 8: '2', 9: '3' }
  const convertedNumbers = numbers.split('').map((el) => keypadMap[el] || el)
  return convertedNumbers.join('')
}

console.log(computerToPhone('0789456123'))
console.log('0789456123'[1])
