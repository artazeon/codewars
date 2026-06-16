function howManyGifts(maxBudget, gifts) {
  let sum = 0
  let count = 0

  gifts.sort((a, b) => a - b)

  for (let price of gifts) {
    if (sum + price > maxBudget) break
    sum += price
    count++
  }

  return count
}

console.log(howManyGifts(20, [13, 2, 4, 6, 1]), 4)
