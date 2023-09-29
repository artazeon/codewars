function removeSmallest(numbers) {
  const min = Math.min(...numbers)
  const minIndex = numbers.indexOf(min)
  const result = numbers.slice(0, minIndex).concat(numbers.slice(minIndex + 1));
  return result
}

console.log(removeSmallest([5, 3, 2, 1, 4]))