function canSnailReachEnd(length, speed, lengthIncreases) {
  const yearLength = 525600
  let currentStep = 0

  for (let i = 0; i <= yearLength; i++) {
    currentStep += speed
    length += lengthIncreases
    if (currentStep >= length) {
      return true
    }
  }

  return false
}

console.log(canSnailReachEnd(10, 2, 1), true)
