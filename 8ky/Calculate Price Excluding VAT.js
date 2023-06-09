function excludingVatPrice(price) {
  if (price === null) {
    return -1
  } else {
    const vat = (price / 115) * 100
    return +vat.toFixed(2)
  }
}

console.log(excludingVatPrice(null))
