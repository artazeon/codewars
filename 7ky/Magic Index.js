// return the magic index
function findMagic(arr) {
  return arr.findIndex((el, ind) => el === ind)
}

console.log(findMagic([-20, -10, 2, 10, 20]))
console.log(findMagic([6, 5, 83, 5, 3, 18]))
