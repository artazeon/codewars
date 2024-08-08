function boredom(staff) {
  let data = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    'pissing about': 25,
  }

  let accum = 0

  for (let key in staff) {
    accum += data[staff[key]]
  }

  return accum <= 80
    ? 'kill me now'
    : accum < 100
    ? 'i can handle this'
    : 'party time!!'
}

console.log(
  boredom({
    tim: 'change',
    jim: 'accounts',
    randy: 'canteen',
    sandy: 'change',
    andy: 'change',
    katie: 'IS',
    laura: 'change',
    saajid: 'IS',
    alex: 'trading',
    john: 'accounts',
    mr: 'finance',
  })
)
