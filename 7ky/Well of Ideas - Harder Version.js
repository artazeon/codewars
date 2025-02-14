function well(x) {
  const goodArr = x.flat().filter((el) => el.toLowerCase() === 'good')

  return goodArr.length === 0
    ? 'Fail!'
    : goodArr.length <= 2
    ? 'Publish!'
    : 'I smell a series!'
}

console.log(
  well([
    ['bad', 'bAd', 'bad'],
    ['bad', 'bAd', 'bad'],
    ['bad', 'bAd', 'bad'],
  ])
)
console.log(
  well([
    ['gOOd', 'bad', 'BAD', 'bad', 'bad'],
    ['bad', 'bAd', 'bad'],
    ['GOOD', 'bad', 'bad', 'bAd'],
  ])
)
console.log(
  well([['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'], ['bad'], ['gOOd', 'BAD']])
)
console.log(
  well([
    [3, 'cheat', 'good'],
    ['BAD', 'BAD', 'BAD', 6, 'CAPS', 'bad'],
    ['6', 'bad', 'CoNcenTraTe', 3],
  ])
)
