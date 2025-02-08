function reduce(fraction) {
  let [chis, znam] = fraction

  let min = Math.min(chis, znam)
  for (let i = min; i > 1; i--) {
    if (chis % i === 0 && znam % i === 0) {
      chis /= i
      znam /= i
      i = min
    }
  }

  return [chis, znam]
}

console.log(reduce([60, 20]))
