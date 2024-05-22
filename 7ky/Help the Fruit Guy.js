function removeRotten(bagOfFruits) {
  return bagOfFruits
    ? bagOfFruits.map((el) => el.replace(/rotten/, '').toLowerCase())
    : []
}

console.log(removeRotten(['apple', 'rottenBanana', 'apple']))
