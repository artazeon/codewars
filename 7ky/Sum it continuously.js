const add = (arr) =>
  arr.map((el, ind) => el + arr.slice(0, ind).reduce((acc, el) => acc + el, 0))

console.log(add([1, 2, 3, 4, 5]))
