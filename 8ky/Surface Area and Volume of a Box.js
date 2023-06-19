function getSize(width, height, depth) {
  const volume = width * height * depth
  const area = 2*(width * height + width * depth + height * depth)
  return [area, volume]
}


console.log(getSize(4, 2, 6))
