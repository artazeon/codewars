function validateTime(time) {
  const regex = /^(?:[01]?\d|2[0-3]):[0-5]\d$/
  return regex.test(time)
}

console.log(validateTime('01:00'), true)
console.log(validateTime('1:00'), true)
console.log(validateTime('1:00'), true)
console.log(validateTime('00:00'), true)
console.log(validateTime('13:1'), false)
console.log(validateTime('12:60'), false)
console.log(validateTime('12: 60'), false)
console.log(validateTime('24:00'), false)
console.log(validateTime('24o:00'), false)
console.log(validateTime('24:000'), false)
console.log(validateTime(''), false)
console.log(validateTime('2400'), false)
console.log(validateTime('foo12:00bar'), false)
console.log(validateTime('010:00'), false)
console.log(validateTime('1;00'), false)
