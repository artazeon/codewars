function nbYear(p0, percent, aug, p) {
  let year = 0
  //console.log(p0, percent, aug, p)
  for (let i = 0; p0 <= p; i++) {
    p0 = Math.floor(p0 + p0 /100 * percent  + aug)
    year++
  }

  return year
}

console.log(nbYear(1500, 5, 100, 5000))
console.log(nbYear(1000, 2, 50, 1214))
console.log(nbYear(1500000, 0, 10000, 2000000))
