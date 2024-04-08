function foldTo(distance) {
  let count = 0
  let paper = 0.0001

  if (distance < 0) {
    return null
  }

  if (distance === 0) {
    return 0
  }

  for (let i = 0; paper < distance; i++) {
    count++
    paper = paper * 2
  }
  return count
}

console.log(foldTo(384000000))
