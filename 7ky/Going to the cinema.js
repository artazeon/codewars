function movie(card, ticket, perc) {
  let count = 0
  let systemA = 0
  let systemB = card

  while (systemB >= systemA) {
    count++
    systemA += ticket
    systemB += ticket * perc ** count
    
  }

  return count
}
console.log(movie(500, 15, 0.9))
