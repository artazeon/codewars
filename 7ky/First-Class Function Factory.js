function factory(x) {
  return (arr) => arr.map((el) => el * x)
}

console.log(factory(3))
