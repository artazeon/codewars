function highestValue(a, b) {
  const sum = (str) =>
    str.split('').reduce((acc, el) => acc + el.charCodeAt(0), 0)
  const sumA = sum(a)
  const sumB = sum(b)

  return sumA >= sumB ? a : b
}
console.log(highestValue('AaBbCcXxYyZz0189', 'KkLlMmNnOoPp4567'))
