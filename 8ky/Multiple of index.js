function multipleOfIndex(array) {
  return array.filter((item, index) => item % index === 0)
}

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]))
