function lowercaseCount(str) {
  const newStr = str.replace(/[^a-z]/g, '')
  return newStr.length
}
console.log(lowercaseCount('abcdefghijklmnopqrstuvwxyz'))
