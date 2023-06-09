function peopleWithAgeDrink(old) {
  return old < 14
    ? 'drink toddy'
    : old <= 17
    ? 'drink coke'
    : old <= 20
    ? 'drink beer'
    : 'drink whisky'
}

console.log(peopleWithAgeDrink(22))
