function stepThroughWith(s) {
  return /(.)\1/.test(s)
}

console.log(stepThroughWith('moon'))
