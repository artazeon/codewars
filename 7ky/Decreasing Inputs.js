function add() {
  const sum = [...arguments].reduce((acc, el, ind) => acc + el / (ind + 1), 0)
  return Math.round(sum)
}
console.log(add(100, 200, 300), 300)
console.log(add(2), 2)
console.log(add(4, -3, -2), 2)
