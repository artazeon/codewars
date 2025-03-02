function pyramid(balls) {
  let level = 0
  while (balls >= level + 1) {
    level++
    balls -= level
  }
  return level
}

console.log(pyramid(1))
console.log(pyramid(4))
console.log(pyramid(20))
