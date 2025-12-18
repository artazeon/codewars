function oddBall(arr) {
  return arr.includes(arr.indexOf('odd'))
}

console.log(
  oddBall([
    'even',
    4,
    'even',
    7,
    'even',
    55,
    'even',
    6,
    'even',
    10,
    'odd',
    3,
    'even',
  ]),
  true
)
