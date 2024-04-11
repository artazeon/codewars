function catMouse(x) {
  const jump = x.slice(1, -1)

  return jump.length > 3 ? 'Escaped!' : 'Caught!'
}
console.log(catMouse('C....m'))
console.log(catMouse('C..m'))
