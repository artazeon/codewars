function alan(x) {
  const str =
    "Go to London. I guarantee you'll either be mugged or not appreciated. Catch the train to London, stopping at Rejection, Disappointment, Backstabbing Central and Shattered Dreams Parkway."

  if (x[0] !== 'Norwich') {
    return 'No, seriously, run. You will miss it.'
  }

  const stops = [
    'Rejection',
    'Disappointment',
    'Backstabbing Central',
    'Shattered Dreams Parkway',
    'London',
  ]

  const allStopsExist = stops.every((stop) => str.includes(stop))

  return allStopsExist
    ? 'Smell my cheese you mother!'
    : 'No, seriously, run. You will miss it.'
}

console.log(
  alan([
    'Norwich',
    'Rejection',
    'Disappointment',
    'Backstabbing Central',
    'Shattered Dreams Parkway',
    'London',
  ]),
)
