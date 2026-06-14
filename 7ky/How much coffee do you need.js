function howMuchCoffee(events) {
  const valid = ['cw', 'cat', 'dog', 'movie']
  let count = 0

  events.forEach((element) => {
    if (valid.includes(element.toLowerCase())) {
      count += element === element.toUpperCase() ? 2 : 1
    }
  })

  return count > 3 ? 'You need extra sleep' : count
}

console.log(howMuchCoffee(['cw', 'CAT']), 3)
console.log(howMuchCoffee(['cw', 'CAT', 'DOG']), 'You need extra sleep')
console.log(howMuchCoffee(['cw', 'CAT', 'cw=others']), 3)
