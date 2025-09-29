function validateEAN(eanCode) {
  const sum = eanCode
    .slice(0, 12)
    .split('')
    .reduce((acc, el, ind) => acc + el * (ind % 2 === 0 ? 1 : 3), 0)

  return +eanCode[12] === (10 - (sum % 10)) % 10
}

console.log(validateEAN('4003301018398'))
console.log(validateEAN('4003301018392'))
