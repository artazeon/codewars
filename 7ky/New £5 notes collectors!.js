function getNewNotes(salary, bills) {
  const summ = salary - bills.reduce((acc, curr) => acc + curr, 0)

  return summ >= 0 ? Math.floor(summ / 5) : 0
}

console.log(getNewNotes(2000, [500, 160, 400]))
