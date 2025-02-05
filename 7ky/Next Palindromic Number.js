function nextPal(val) {
  while (true) {
    val++
    let str = String(val)
    if (str === str.split('').reverse().join('')) {
      return val
    }
  }
}

console.log(nextPal(191))
