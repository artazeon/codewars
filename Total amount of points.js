function points(games) {
  return games.reduce((accum, item) => {
    const [x, y] = item.split(':')
    if (x > y) accum += 3
    else if (x === y) accum += 1
    return accum
  }, 0)
}

console.log(
  points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3'])
)
