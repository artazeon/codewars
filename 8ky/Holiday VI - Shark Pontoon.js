function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  sharkSpeed = dolphin ? sharkSpeed / 2 : sharkSpeed
  const myTime = pontoonDistance / youSpeed
  const sharkTime = sharkDistance / sharkSpeed

  return myTime < sharkTime ? 'Alive!' : 'Shark Bait!'
}

console.log(shark(12, 50, 4, 8, true))
console.log(shark(12, 50, 4, 8, false))
