function nextHappyYear(year) {
  for (let i = 0; i < 9000; i++) {
    year++
    const arr = year.toString().split('')
    if (new Set(arr).size === arr.length) {
      return year
    }
  }
}

console.log(nextHappyYear(1001))
