function distinctDigitYear(year) {
  for (let i = year + 1; i <= 9000; i++) {
    const str = String(i)
    if (new Set(str).size === str.length) return i
  }
}

console.log(distinctDigitYear(1987), 2013)
