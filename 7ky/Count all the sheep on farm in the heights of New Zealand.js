function lostSheep(friday, saturday, total) {
  const sumDay = (arr) => arr.reduce((acc, el) => acc + el, 0)
  const fridaySum = sumDay(friday)
  const saturdaySum = sumDay(saturday)
  return total - fridaySum - saturdaySum
}

console.log(lostSheep([1, 2], [3, 4], 15))
