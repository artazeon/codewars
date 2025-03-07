function trouble(x, t) {
  for (let i = 0; i <= x.length; i++) {
    if (x[i] + x[i + 1] === t) {
      x.splice(i + 1, 1)
      i--
    }
  }
  return x
}
console.log(trouble([1, 2, 3, 4, 5], 3))
console.log(trouble([2, 2, 2, 2, 2, 2], 4))
