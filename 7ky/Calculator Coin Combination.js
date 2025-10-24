function coinCombo(cents) {
  let quarters = Math.floor(cents / 25)
  cents %= 25

  let dimes = Math.floor(cents / 10)
  cents %= 10

  let nickels = Math.floor(cents / 5)
  cents %= 5

  let pennies = cents

  return [pennies, nickels, dimes, quarters]
}

console.log(coinCombo(43, [3, 1, 1, 1]))
