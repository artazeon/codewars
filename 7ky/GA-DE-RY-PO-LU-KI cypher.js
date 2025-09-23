const diar = {
  G: 'A',
  g: 'a',
  A: 'G',
  a: 'g',

  D: 'E',
  d: 'e',
  E: 'D',
  e: 'd',

  R: 'Y',
  r: 'y',
  Y: 'R',
  y: 'r',

  P: 'O',
  p: 'o',
  O: 'P',
  o: 'p',

  L: 'U',
  l: 'u',
  U: 'L',
  u: 'l',

  K: 'I',
  k: 'i',
  I: 'K',
  i: 'k',
}

function encode(str) {
  let encRes = ''

  for (let i = 0; i < str.length; i++) {
    str[i] in diar ? (encRes += diar[str[i]]) : (encRes += str[i])
  }

  return encRes
}

function decode(str) {
  let decRes = ''

  for (let i = 0; i < str.length; i++) {
    str[i] in diar ? (decRes += diar[str[i]]) : (decRes += str[i])
  }

  return decRes
}

console.log(encode('Ala has a cat'), 'Gug hgs g cgt')
console.log(decode('Gug hgs g cgt'), 'Ala has a cat')
