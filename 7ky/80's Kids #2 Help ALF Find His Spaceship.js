function findSpaceship(map) {
  if (!map) return 'Spaceship lost forever.'

  const rows = map.split('\n')
  const height = rows.length

  const yFromTop = rows.findIndex((row) => row.includes('X'))
  if (yFromTop === -1) return 'Spaceship lost forever.'

  const x = rows[yFromTop].indexOf('X')
  const y = height - 1 - yFromTop

  return [x, y]
}
console.log(
  findSpaceship('..........\n..........\n.......X..\n..........\n..........'),
  [7, 2],
)
console.log(findSpaceship('.......\nX.......'), [0, 0])
console.log(
  findSpaceship('........................'),
  'Spaceship lost forever.',
)
