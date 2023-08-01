function validBraces(braces) {
  let find = /(\(\)|\[\]|\{\}|\(\)|\[\]|\{\})/g;
  while (braces.match(find)) {
    braces = braces.replace(find, '')
  }

  return braces.length ? false : true
}

console.log(validBraces('[({})](]'))

