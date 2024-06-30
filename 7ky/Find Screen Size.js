function findScreenHeight(width, ratio) {
  const [widthR, heightR] = ratio.split(':')
  const heigth = (width / widthR) * heightR
  return `${width}x${heigth}`
}

console.log(findScreenHeight(1024, '4:3'))
