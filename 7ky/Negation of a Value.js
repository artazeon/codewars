function negationValue(string, value) {
  return string.length % 2 === 0 ? !!value : !!!value
}

console.log(negationValue('!', false)), true
console.log(negationValue('!', true)), false
console.log(negationValue('!!!!!!!!!!!!!!', null)), false
