const evenLast = (numbers) =>
  numbers.reduce(
    (acc, el, ind) =>
      ind % 2 === 0 ? acc + el * numbers[numbers.length - 1] : acc,
    0
  )

console.log(evenLast([2, 3, 4, 5]))
