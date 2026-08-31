function collision(x1, y1, radius1, x2, y2, radius2) {
  const dx = x2 - x1
  const dy = y2 - y1
  const distanceSquared = dx * dx + dy * dy
  const radiiSum = radius1 + radius2

  return distanceSquared <= radiiSum * radiiSum
}
console.log(collision(1, 1, 1, 1.1, 1.1, 0.1))
