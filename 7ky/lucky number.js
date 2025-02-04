function isLucky(n) {
  const sum = String(n)
    .split('')
    .reduce((acc, el) => acc + +el, 0)

  return sum === 0 || sum % 9 === 0
}

console.log(isLucky(1892376))
