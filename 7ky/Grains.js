function square(number) {
  let count = 1

  for (let i = 1; i < number; i++) {
    count = count * 2
  }

  return count
}

console.log(square(3))
