function dropWhile(array, predicate) {
  let i = 0
  for (i = 0; i < array.length && predicate(array[i]); i++) {}
  return array.slice(i)
}

function isEven(num) {
  return num % 2 === 0
}

console.log(dropWhile([2, 4, 6, 8, 1, 2, 5, 4, 3, 2], isEven))
