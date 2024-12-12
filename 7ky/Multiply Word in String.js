function modifyMultiply(str, loc, num) {
  const word = str.split(' ')[loc]

  return Array(num).fill(word).join('-')
}

console.log(modifyMultiply('This is a string', 3, 5))
console.log(
  modifyMultiply(
    "Creativity is the process of having original ideas that have value. It is a process; it's not random.",
    8,
    10
  )
)
