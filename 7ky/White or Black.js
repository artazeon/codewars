function mineColor(file, rank) {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

  const fileIndex = letters.indexOf(file) + 1

  return (fileIndex + rank) % 2 === 0 ? 'black' : 'white'
}

console.log(mineColor('a', 8), 'white')
console.log(mineColor('b', 2), 'black')
console.log(mineColor('f', 5), 'white')
