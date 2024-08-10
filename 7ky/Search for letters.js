function change(string) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'

  const arr = alphabet
    .split('')
    .map((el) => (string.toLowerCase().includes(el) ? 1 : 0))

  return arr.join('')
}

console.log(change('a **&  bZ'))
