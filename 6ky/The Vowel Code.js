function encode(string) {
  const encObj = { a: 1, e: 2, i: 3, o: 4, u: 5 }
  return string
    .split('')
    .map((el) => (encObj[el] ? encObj[el] : el))
    .join('')
}

function decode(string) {
  const decObj = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' }
  return string
    .split('')
    .map((el) => (decObj[el] ? decObj[el] : el))
    .join('')
}
console.log(encode('hello'))
console.log(decode('h2ll4'))
