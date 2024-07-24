function twoSort(s) {
  const str = s.sort()[0]

  let result = str[0]

  for (let i = 1; i < str.length; i++) {
    result += `***${str[i]}`
  }

  return result
}

console.log(
  twoSort([
    'bitcoin',
    'take',
    'over',
    'the',
    'world',
    'maybe',
    'who',
    'knows',
    'perhaps',
  ])
)
console.log(
  twoSort([
    'turns',
    'out',
    'random',
    'test',
    'cases',
    'are',
    'easier',
    'than',
    'writing',
    'out',
    'basic',
    'ones',
  ])
)
