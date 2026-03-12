function pointInCircle(x, y) {
  return x * x + y * y < 1
}

console.log(pointInCircle(0, 0), 'Origin is inside')
console.log(pointInCircle(2, 0), '(2, 0) is outside')
console.log(pointInCircle(0, 0.9), '(0, 0.9) is inside')
console.log(pointInCircle(0.5, 0.5), '(0.5, 0.5) is inside')
console.log(pointInCircle(1, 0), '(1, 0) is on border and thus outside')
