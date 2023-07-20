function validPhoneNumber(phoneNumber) {
  console.log(phoneNumber)
  const pattern = /^\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$/g
  return pattern.test(phoneNumber)
}

console.log(validPhoneNumber('(123) 456-7890'))
