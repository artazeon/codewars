function chineseZodiac(year) {
  let start = 1924

  const animals = [
    'Rat',
    'Ox',
    'Tiger',
    'Rabbit',
    'Dragon',
    'Snake',
    'Horse',
    'Goat',
    'Monkey',
    'Rooster',
    'Dog',
    'Pig',
  ]
  const elements = ['Wood', 'Fire', 'Earth', 'Metal', 'Water']

  const diff = year - start

  const animal = animals[diff % 12]
  const element = elements[Math.floor((diff % 10) / 2)]

  return `${element} ${animal}`
}

console.log(chineseZodiac(1965), 'Wood Snake')
