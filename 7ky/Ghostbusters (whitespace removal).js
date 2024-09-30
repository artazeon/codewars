function ghostBusters(building) {
  return building.includes(' ')
    ? building.replace(/\s/g, '')
    : "You just wanted my autograph didn't you?"
}

console.log(ghostBusters('Factor y'))
console.log(ghostBusters('Factory'))
