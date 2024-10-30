function crap(x, bags, cap) {
  let count = 0

  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x[i].length; j++) {
      if (x[i][j] === '@') count++
      if (x[i][j] === 'D') return 'Dog!!'
    }
  }

  return count > bags * cap ? 'Cr@p' : 'Clean'
}

console.log(
  crap(
    [
      ['_', '_', '_', '_'],
      ['_', '_', '_', '@'],
      ['_', '_', '@', '_'],
    ],
    2,
    2
  )
)
