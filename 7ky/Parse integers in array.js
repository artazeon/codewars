function uncensor(infected, discovered) {
  let i = 0

  return infected
    .split('')
    .map((ch) => (ch === '*' ? discovered[i++] : ch))
    .join('')
}

console.log(uncensor('*h*s *s v*ry *tr*ng*', 'Tiiesae'))
