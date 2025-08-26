function lottery(str) {
  const arr = str.split('').filter((el) => !isNaN(el))
  const unique = [...new Set(arr)].join('')
  return unique.length ? unique : 'One more run!'
}

console.log(lottery('wQ8Hy0y5m5oshQPeRCkG'))
console.log(lottery('ffaQtaRFKeGIIBIcSJtg'))
