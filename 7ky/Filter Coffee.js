const search = (budget, prices) =>
  prices
    .filter((el) => el <= budget)
    .sort((a, b) => a - b)
    .join(',')

console.log(search(3, [6, 1, 2, 9, 2]))
