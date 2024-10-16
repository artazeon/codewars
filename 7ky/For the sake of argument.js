const numbers = (...arg) => arg.every((el) => typeof el === 'number')

console.log(numbers(1, 4, 3, 2, 5)) // true
console.log(numbers(1, 'a', 3)) // false
console.log(numbers(1, 3, NaN)) // true)
