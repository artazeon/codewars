const duplicates = (arr) =>
  Array.from(new Set(arr.filter((el, ind) => arr.indexOf(el) != ind)))

console.log(duplicates([1, 2, 3, 3, 2, 1, 6]))
console.log(duplicates([1, 2, 1, 2, 1, 2, 1]))
