function convert(number) {
  let str = ''

  for (let i = 0; i < number.length; i += 2) {
    str += String.fromCharCode(number[i] + number[i + 1])
  }
  return str
}

console.log(convert('65'))
console.log(convert('656667'))
