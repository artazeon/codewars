const isFlush = (cards) =>
  cards.every((el) => el[el.length - 1] == cards[0][cards[0].length - 1])

console.log(isFlush(['AS', '3S', '9S', 'KS', '4S']))
console.log(isFlush(['AD', '4S', '7H', 'KC', '5S']))
console.log(isFlush(['QD', '4D', '10D', 'KD', '5D']))
console.log(isFlush(['4D', '10D', '7D', 'KD', '9D']))
