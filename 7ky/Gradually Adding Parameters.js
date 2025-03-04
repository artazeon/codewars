function add() {
  return [...arguments].reduce((acc, el, ind) => acc + el * (ind + 1), 0)
}

console.log(add(3, 4, 5))
