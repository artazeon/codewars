reverse = function (array) {
  const rev = []

  for (let i = 0; i < array.length; i++) {
    rev.unshift(array[i])
  }

  return rev
}

console.log(reverse([1, 2, 3]))
