function elimination(arr) {
  const res = arr.filter((el) => arr.indexOf(el) != arr.lastIndexOf(el))[0]
  return res != undefined ? res : null
}
console.log(elimination([2, 5, 34, 1, 22, 1]))
console.log(elimination([2, 2, 34, 1, 22]))
console.log(elimination([2, 5, 34, 1, 22]))
console.log(elimination([0, 5, 84, 0, 15, 42, 3]))
