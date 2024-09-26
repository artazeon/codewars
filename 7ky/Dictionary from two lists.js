function createDict(keys, values) {
  const dict = {}

  keys.forEach((element, index) =>
    index < values.length
      ? (dict[element] = values[index])
      : (dict[element] = null)
  )

  return dict
}

console.log(createDict(['a', 'b', 'c'], [1, 2, 3]))
console.log(createDict(['a', 'b', 'c', 'd'], [1, 2, 3]))
