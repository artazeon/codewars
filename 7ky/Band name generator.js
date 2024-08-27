function bandNameGenerator(str) {
  const newStr = str.charAt(0).toUpperCase() + str.slice(1)

  return str[0] === str[str.length - 1]
    ? newStr + str.slice(1)
    : `The ${newStr}`
}

console.log(bandNameGenerator('knife'))
console.log(bandNameGenerator('tart'))

;('Scissorsscissors')
;('Scissorscissors')
