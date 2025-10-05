function missingWord(nums, str) {
  const cleanStr = str.replace(/\s+/g, '')
  const sorted = nums.sort((a, b) => a - b)
  const result = sorted.map((i) => cleanStr[i]?.toLowerCase())
  return result.includes(undefined) ? 'No mission today' : result.join('')
}

console.log(missingWord([5, 0, 3], 'I love you'))
console.log(missingWord([50, 4, 6], 'Hi everybody'))
