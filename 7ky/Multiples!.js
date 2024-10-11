const multiple = (x) =>
  x % 3 == 0 && x % 5 == 0
    ? 'BangBoom'
    : x % 3 == 0
    ? 'Bang'
    : x % 5 == 0
    ? 'Boom'
    : 'Miss'

console.log(multiple(30), 'BangBoom')
console.log(multiple(3), 'Bang')
console.log(multiple(98), 'Miss')
console.log(multiple(65), 'Boom')
console.log(multiple(23), 'Miss')
console.log(multiple(15), 'BangBoom')
