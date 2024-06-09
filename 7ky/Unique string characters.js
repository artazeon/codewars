function solve(a, b) {
  let str = ''

  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      str += a[i]
    }
  }

  for (let i = 0; i < b.length; i++) {
    if (!a.includes(b[i])) {
      str += b[i]
    }
  }

  return str
}

console.log(solve('xyabb', 'xzca'))
