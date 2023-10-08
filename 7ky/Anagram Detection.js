var isAnagram = function (test, original) {
  const testSort = test.toLowerCase().split('').sort().join('')
  const originalSort = original.toLowerCase().split('').sort().join('')
  return testSort == originalSort
}

console.log(isAnagram('eeffoT', 'toffee'))
