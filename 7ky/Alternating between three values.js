function f(x, cc) {
  const arr = [cc.a, cc.b, cc.c]
  const i = arr.indexOf(x)
  return arr[(i + 1) % 3]
}
console.log(f(3, { a: 3, b: 4, c: 5 }))
