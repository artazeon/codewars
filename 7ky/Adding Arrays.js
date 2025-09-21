function arrAdder(arr) {
  let result = []

  for (let col = 0; col < arr[0].length; col++) {
    let word = ''
    for (let row = 0; row < arr.length; row++) {
      word += arr[row][col]
    }
    result.push(word)
  }

  return result.join(' ').trim()
}

console.log(
  arrAdder([
    ['J', 'L', 'L', 'M'],
    ['u', 'i', 'i', 'a'],
    ['s', 'v', 'f', 'n'],
    ['t', 'e', 'e', ''],
  ])
)
