function noOdds(values) {
  return values.filter((i) => i % 2 == 0)
}

console.log(noOdds([0, 1]))
