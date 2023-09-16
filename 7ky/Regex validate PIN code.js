function validatePIN(pin) {
  return  (pin.length === 4 || pin.length === 6) && /^[0-9]+$/.test(pin) ? true : false
 }

console.log(validatePIN('1'))
console.log(validatePIN(".234"))
console.log(validatePIN("0000"))
