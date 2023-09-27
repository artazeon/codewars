function oddOrEven(array) {
  return array.reduce((ac, el) => el + ac, 0) % 2 ? 'odd' : 'even'
}

console.log(oddOrEven([0, 1, 5]))
console.log(oddOrEven([0]))
console.log(oddOrEven([1]))
