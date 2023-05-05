function digitize(n) {
  const arr = []
  for (let i = 0; i < String(n).length; i++) {
    arr.unshift(Number(String(n)[i]))
  }
  return arr
}

console.log(digitize(35231))
