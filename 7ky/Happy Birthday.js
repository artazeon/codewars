function wrap(height, width, length) {
  return 2 * (height + width + length + Math.min(height, width, length)) + 20
}

console.log((wrap(17, 32, 11), 162))
