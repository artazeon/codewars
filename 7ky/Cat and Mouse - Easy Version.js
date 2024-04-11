function catMouse(x) {
  const length = x.slice(1, -1)

  return length.length > 3 ? 'Escaped!' : 'Caught!'
}
console.log(catMouse('C....m'))
console.log(catMouse('C..m'))
