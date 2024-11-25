function getNiceNames(people) {
  const good = []
  people.forEach((el) => {
    if (el.wasNice) {
      good.push(el.name)
    }
  })

  return good
}

function getNaughtyNames(people) {
  const bad = []

  people.forEach((el) => {
    if (!el.wasNice) {
      bad.push(el.name)
    }
  })

  return bad
}

console.log(
  getNiceNames([
    { name: 'Warrior reading this kata', wasNice: true },
    { name: 'xDranik', wasNice: false },
    { name: 'Santa', wasNice: true },
  ])
)
console.log(
  getNaughtyNames([
    { name: 'Warrior reading this kata', wasNice: true },
    { name: 'xDranik', wasNice: false },
    { name: 'Santa', wasNice: true },
  ])
)
