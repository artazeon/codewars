function zipvalidate(postcode) {
  return /^[12346]\d{5}$/.test(postcode)
}

console.log(zipvalidate('198328'))
console.log(zipvalidate('12A483'))
