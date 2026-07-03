function convertPalindromes(numbers) {
  return numbers.map((el, ind) => {
    const str = String(el)
    const reversedStr = str.split('').reverse().join('')
    return str === reversedStr ? 1 : 0
  })
}

console.log(convertPalindromes([22, 303, 76, 411, 89]), [1, 1, 0, 0, 0])
console.log(convertPalindromes([653, 808, 5]), [0, 1, 1])
