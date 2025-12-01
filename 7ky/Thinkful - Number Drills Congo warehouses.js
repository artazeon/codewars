function boxCapacity(length, width, height) {
  const boxSize = 16 / 12
  const boxesLength = Math.floor(length / boxSize)
  const boxesWidth = Math.floor(width / boxSize)
  const boxesHeight = Math.floor(height / boxSize)

  return boxesLength * boxesWidth * boxesHeight
}

console.log(boxCapacity(32, 64, 16), 13824)
