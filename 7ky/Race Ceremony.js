function racePodium(blocks) {
  const first = Math.ceil((blocks + 3) / 3)
  const second = first - 1
  const third = blocks - first - second

  return [second, first, third]
}

console.log(racePodium(11), [4, 5, 2])
console.log(racePodium(6), [2, 3, 1])
console.log(racePodium(10), [4, 5, 1])
console.log(racePodium(100000), [33334, 33335, 33331])
