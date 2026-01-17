function doubleCheck(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i].toLowerCase() === str[i + 1].toLowerCase()) {
      return true
    }
  }
  return false
}

console.log(doubleCheck('abca'))
console.log(doubleCheck('aabc'))
