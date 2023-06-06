function xor(a, b) {
  if (a === true && b === true) {
    return false
  } else if (a == true) {
    return true
  } else if (b == true) {
    return true
  } else {
    return false
  }
}

console.log(xor(false, false))
console.log(xor(true, false))
console.log(xor(false, true))
console.log(xor(true, true))
console.log(xor(true, true))
