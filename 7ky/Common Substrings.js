function substringTest(str1, str2) {
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()

  for (let i = 0; i < str1.length; i++) {
    if (str2.includes(str1[i] + str1[i + 1])) {
      return true
    }
  }

  return false
}

console.log(substringTest('Something', 'Home'), true)
console.log(substringTest('Something', 'Fun'), false)
console.log(substringTest('Something', ''), false)
console.log(substringTest('BANANA', 'banana'), true)
