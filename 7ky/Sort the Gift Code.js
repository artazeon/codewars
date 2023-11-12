function sortGiftCode(code) {
  const sortCode = code.split('').sort().join('')
  return sortCode
}

console.log(sortGiftCode('zyxwvutsrqponmlkjihgfedcba'))
