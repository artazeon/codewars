function numberOfPairs(gloves) {
  let count = {}

  for (let i = 0; i < gloves.length; i++) {
    if (count[gloves[i]]) {
      count[gloves[i]] = count[gloves[i]] + 0.5
    } else {
      count[gloves[i]] = 0.5
    }
  }

  const arr = Object.values(count).reduce(
    (acc, el) => (el >= 1 ? acc + Math.floor(el) : acc),
    0
  )
  return arr
}

console.log(numberOfPairs(['red', 'green', 'red', 'blue', 'blue']))
console.log(numberOfPairs(['red', 'red', 'red', 'red', 'red', 'red']))
