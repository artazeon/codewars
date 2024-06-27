function hydrate(s) {
  const sum = s.split('').reduce((acc, el) => (+el ? acc + +el : acc), 0)
  return sum > 1 ? `${sum} glass of water` : `${sum} glasses of water`
}

console.log(hydrate('1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer'))
