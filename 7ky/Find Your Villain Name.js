function getVillainName(birthday) {
  const m = [
    'Evil',
    'Vile',
    'Cruel',
    'Trashy',
    'Despicable',
    'Embarrassing',
    'Disreputable',
    'Atrocious',
    'Twirling',
    'Orange',
    'Terrifying',
    'Awkward',
  ]
  const d = [
    'Mustache',
    'Pickle',
    'Hood Ornament',
    'Raisin',
    'Recycling Bin',
    'Potato',
    'Tomato',
    'House Cat',
    'Teaspoon',
    'Laundry Basket',
  ]
  const mounth = birthday.getMonth()
  const day = birthday.getDate() % 10
  return `The ${m[mounth]} ${d[day]}`
}

console.log(getVillainName(new Date('May 3')))
console.log(getVillainName(new Date('April 21')))
