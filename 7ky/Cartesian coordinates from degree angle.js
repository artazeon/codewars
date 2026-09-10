function coordinates(angle, radius) {
  const radians = (angle * Math.PI) / 180

  const x = radius * Math.cos(radians)
  const y = radius * Math.sin(radians)

  return [x, y]
}

console.log(coordinates(90, 1), [0, 1])
