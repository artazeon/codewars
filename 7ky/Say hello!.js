const greet = (name) =>
  name == null || name.length == 0 ? null : `hello ${name}!`

console.log(greet('Niks'))
console.log(greet(null))
