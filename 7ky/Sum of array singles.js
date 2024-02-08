function repeats(arr) {
  const sumUnic = arr
    .filter((el) => arr.indexOf(el) === arr.lastIndexOf(el))
    .reduce((acc, el) => acc + el, 0)

  return sumUnic
}

console.log(repeats([4, 5, 7, 5, 4, 8]))
