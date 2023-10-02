function stray(numbers) {
  const res = numbers.filter(el => {return numbers.indexOf(el) == numbers.lastIndexOf(el)})
  return res[0]
}

console.log(stray([1, 1, 2]))
console.log(stray([1, 2, 1]))
console.log(stray([2, 1, 1]))
