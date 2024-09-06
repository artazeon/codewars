function unusedDigits(...numbers) {
  const str = numbers.join('')
  let result = ''
  for (let i = 0; i <= 9; i++) {
    if (!str.includes(i)) {
      result += i
    }
  }

  return result
}

console.log(unusedDigits(12, 34, 56, 78))
console.log(unusedDigits(2015, 8, 26))
