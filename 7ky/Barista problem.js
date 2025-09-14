function barista(coffees) {
  const sortedCoffees = coffees.sort((a, b) => a - b)
  return coffees.reduce((acc, el, ind) => {
    return (
      acc + el + coffees.slice(0, ind).reduce((acc2, el2) => acc2 + el2 + 2, 0)
    )
  }, 0)
}

console.log(barista([4, 3, 2]))
console.log(barista([20, 5]))
