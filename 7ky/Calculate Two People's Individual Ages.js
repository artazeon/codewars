function getAges(sum, difference) {
  if (sum < 0 || difference < 0) return null

  for (let i = 0, j = sum; i <= sum; i += 0.5, j -= 0.5) {
    if (Math.abs(j + i - sum) < 1e-9 && Math.abs(j - i - difference) < 1e-9) {
      return [j, i]
    }
  }

  return null
}

console.log(getAges(24, 4))
console.log(getAges(81, 55))
