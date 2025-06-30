function min(a, b) {
  if (a === null) a = 0
  if (b === null) b = 0

  if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
    return NaN
  }

  return a < b ? a : b
}

console.log(min(1, -2.5))
