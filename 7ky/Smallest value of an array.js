function min(arr, toReturn) {
  const minV = Math.min(...arr)
  const minI = arr.indexOf(minV)
  return toReturn === 'value' ? minV : minI
}

console.log(min([500, 250, 750, 5000, 1000, 230], 'value'))
console.log(min([500, 250, 750, 5000, 1000, 230], 'index'))
