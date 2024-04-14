function heron(a, b, c) {
  const s = (a + b + c) / 2
  const h = Math.sqrt(s * (s - a) * (s - b) * (s - c))
  return h
}

console.log(heron(3, 4, 5))
