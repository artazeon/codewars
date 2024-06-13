function rgb(r, g, b) {
  const hexСolor = (color) => {
    const limitedColor = Math.max(Math.min(color, 255), 0)
    const hexString = limitedColor.toString(16).toUpperCase().padStart(2, '0')
    return hexString
  }

  const arr = [hexСolor(r), hexСolor(g), hexСolor(b)]
  return arr.join('')
}

console.log(rgb(0, 0, 0))
console.log(rgb(300, 255, -20))
