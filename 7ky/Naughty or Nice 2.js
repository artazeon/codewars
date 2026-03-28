function whatListAmIOn(actions) {
  let naughty = 0
  let nice = 0

  for (let action of actions) {
    const first = action[0]

    if (['b', 'f', 'k'].includes(first)) naughty++
    else if (['g', 's', 'n'].includes(first)) nice++
  }

  return naughty >= nice ? 'naughty' : 'nice'
}

console.log(
  whatListAmIOn([
    "broke someone's window",
    'fought over a toaster',
    'killed a bug',
  ]),
)
console.log(
  whatListAmIOn([
    'got someone a new car',
    'saved a man from drowning',
    'never got into a fight',
  ]),
)
