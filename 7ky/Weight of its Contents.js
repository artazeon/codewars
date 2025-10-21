function contentWeight(bottleWeight, scale) {
  const n = parseInt(scale)
  const isLarger = scale.includes('larger')

  return isLarger ? (bottleWeight * n) / (n + 1) : bottleWeight / (n + 1)
}

console.log(contentWeight(120, '2 times larger'))
