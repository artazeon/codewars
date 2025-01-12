function findNextPower(val, pow_) {
  const base = Math.pow(val, 1 / pow_)
  const isPowerExact = Math.pow(Math.round(base), pow_) === val

  const nextBase = isPowerExact ? Math.round(base) + 1 : Math.ceil(base)

  return Math.pow(nextBase, pow_)
}

console.log(findNextPower(8, 3))
console.log(findNextPower(12385, 3))
console.log(findNextPower(1245678, 5))
console.log(findNextPower(1245678, 6))
console.log(findNextPower(4782969, 7))
