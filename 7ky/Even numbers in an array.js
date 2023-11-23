function evenNumbers(array, number) {
  const even = array.filter((el) => el % 2 === 0)
  return even.slice(even.length - number, even.length)
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
