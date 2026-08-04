function insurance(age, size, numofdays) {
  if (numofdays < 1) return 0
  let price = 0
  if (age < 25) price += 10
  if (size === 'medium') price += 10
  if (
    (size !== 'economy' && size !== 'medium' && size !== 'full-size') ||
    size === 'full-size'
  )
    price += 15
  return (price + 50) * numofdays
}

console.log(insurance(18, 'medium', 7), 490)
console.log(insurance(42, 'my custom car', 7), 490)
