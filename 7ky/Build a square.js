function generateShape(integer) {
  let str = ''

  for (let i = 0; i < integer; i++) {
    let col = '+'
    for (let j = 1; j < integer; j++) {
      col += '+'
    }
    str += `\n${col}`
  }

  return str.slice(1)
}

console.log(generateShape(8))
