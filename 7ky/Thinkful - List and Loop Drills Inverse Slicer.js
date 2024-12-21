const inverseSlice = (items, a, b) => [
  ...items.slice(0, a),
  ...items.slice(b, items.length),
]

console.log(inverseSlice([12, 14, 63, 72, 55, 24], 2, 4))
