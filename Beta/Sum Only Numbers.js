function sumNumbers(...arg) {
  return arg.reduce((acc, el) => (typeof el === 'number' ? acc + +el : acc), 0)
}

console.log(sumNumbers('something', 1, 2))
