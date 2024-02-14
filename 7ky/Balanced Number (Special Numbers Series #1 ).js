function balancedNum(number) {
  const arr = number.toString().split('')

  let leftP = []
  let rightP = []

  if (arr.length % 2 === 0) {
    leftP = arr.slice(0, arr.length / 2 - 1)
    rightP = arr.slice(arr.length / 2 + 1)
  } else {
    leftP = arr.slice(0, arr.length / 2 - 0.5)
    rightP = arr.slice(arr.length / 2 + 1)
  }

  return leftP.reduce((acc, el) => acc + +el, 0) ===
    rightP.reduce((acc, el) => acc + +el, 0)
    ? 'Balanced'
    : 'Not Balanced'
}

console.log(balancedNum(56239814))
console.log(balancedNum(562398145))
