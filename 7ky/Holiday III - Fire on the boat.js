function fireFight(s) {
  const noFire = s.split(' ').map((el) => (el === 'Fire' ? '~~' : el))
  return noFire.join(' ')
}

console.log(
  fireFight(
    'Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast'
  )
)
