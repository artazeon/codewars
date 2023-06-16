function descendingOrder(n) {
  const str = String(n)
  const arr = str.split('')

  arr.sort(function (a, b) {
    return b - a 
  })

  return +arr.join('')
}
console.log(descendingOrder(1021))
