function twoDecimalPlaces(number) {
  return +number.toFixed(4).slice(0, -2)
}

console.log(twoDecimalPlaces(10.1289767789))
console.log(twoDecimalPlaces(2235025.3897089316))
