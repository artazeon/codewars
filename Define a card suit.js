function defineSuit(card) {
  const arr = card.split('')
  const symbol = arr[arr.length - 1]

  if (symbol === '♣') {
    return 'clubs'
  }
  else if (symbol === '♦') {
    return 'diamonds'
  }
  else if (symbol === '♥') {
    return 'hearts'
  }
  return 'spades'
}

defineSuit('1♣')