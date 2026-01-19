function area(d, l) {
  if (d <= l) return 'Not a rectangle'
  const b = Math.sqrt(d * d - l * l)
  return Math.round(b * l * 100) / 100
}

console.log(area(5, 4))
console.log(area(12, 5))
