function numberJoy(n) {
  const arr = n.toString().split('')
  const sum = arr.reduce((acc, el) => acc + +el, 0)
  const rev = sum.toString().split('').reverse().join('')

  return rev * sum === n
}

console.log(numberJoy(1729))
