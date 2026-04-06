function stackHeight2d(layers) {
  if (layers === 0) return 0
  return 1 + (layers - 1) * (Math.sqrt(3) / 2)
}

console.log(stackHeight2d(2))
