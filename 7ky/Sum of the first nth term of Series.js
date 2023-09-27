function SeriesSum(n) {
  let sum = 1
  let start = 4
  if (n === 0) {
    return '0.00'
  } else {
    for (i = 2; i <= n; i++) {
      console.log(start)
      sum += 1 / start
      start = start + 3
    }
  }

  return sum.toFixed(2)
}

//console.log(SeriesSum(2))
console.log(SeriesSum(5))
console.log(SeriesSum(0))
console.log(SeriesSum(1))

//5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
//5 --> 1 + 0.25 + 0.142 + 0.1 + 0,076 --> "1.57"
