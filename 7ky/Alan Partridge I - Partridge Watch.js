function part(x) {
  const termins = [
    'Partridge',
    'PearTree',
    'Chat',
    'Dan',
    'Toblerone',
    'Lynn',
    'AlphaPapa',
    'Nomad',
  ]

  const filteredTermins = x.filter((item) => termins.includes(item))

  return filteredTermins.length
    ? `Mine\'s a Pint!${`!`.repeat(filteredTermins.length - 1)}`
    : `Lynn, I\'ve pierced my foot on a spike!!`
}

console.log(part(['Grouse', 'Partridge', 'Pheasant']))
console.log(part(['Pheasant', 'Goose', 'Starling', 'Robin']))
console.log(
  part([
    'Grouse',
    'Partridge',
    'Pheasant',
    'Goose',
    'Starling',
    'Robin',
    'Thrush',
    'Emu',
    'PearTree',
    'Chat',
    'Dan',
    'Square',
    'Toblerone',
    'Lynn',
    'AlphaPapa',
    'BMW',
    'Graham',
    'Tool',
    'Nomad',
    'Finger',
    'Hamster',
  ]),
)
