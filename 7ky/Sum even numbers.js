function sumEvenNumbers(input) {
  const sum = input.reduce((ac, el) => el % 2 === 0 ? ac + el : ac, 0);
  return sum
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
