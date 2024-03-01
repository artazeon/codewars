function killer(suspectInfo, dead) {
  for (let [key, value] of Object.entries(suspectInfo)) {
    if (dead.every((person) => suspectInfo[key].includes(person))) return key
  }
}

console.log(
  killer(
    {
      James: ['Jacob', 'Bill', 'Lucas'],
      Johnny: ['David', 'Kyle', 'Lucas'],
      Peter: ['Lucy', 'Kyle'],
    },
    ['Lucas', 'Bill']
  )
)
