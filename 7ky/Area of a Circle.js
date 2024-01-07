function circleArea(radius) {
  if (radius > 0) {
    return Math.PI * Math.pow(radius, 2);
  } else {
    throw new Error('Invalid input');
  }
}
console.log(circleArea(1))
console.log(circleArea(0))

