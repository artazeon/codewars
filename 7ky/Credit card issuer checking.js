function getIssuer(number) {
  const str = number.toString()

  if (/^3[47]\d{13}$/.test(str)) {
    return 'AMEX'
  } else if (/^6011\d{12}$/.test(str)) {
    return 'Discover'
  } else if (/^5[1-5]\d{14}$/.test(str)) {
    return 'Mastercard'
  } else if (/^4(\d{12}|\d{15})$/.test(str)) {
    return 'VISA'
  }

  return 'Unknown'
}

console.log(getIssuer(4111111111111111))
console.log(getIssuer(3711111111111111))
