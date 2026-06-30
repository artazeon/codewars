function workNeeded(projectMinutes, freelancers) {
  let totalFreelanceMinutes = freelancers.reduce(
    (sum, [hours, mins]) => sum + (hours * 60 + mins),
    0,
  )

  let myWorkMinutes = projectMinutes - totalFreelanceMinutes

  return myWorkMinutes <= 0
    ? 'Easy Money!'
    : `I need to work ${Math.floor(myWorkMinutes / 60)} hour(s) and ${myWorkMinutes % 60} minute(s)`
}
console.log(workNeeded(60, [[1, 0]]))
console.log(workNeeded(60, [[0, 0]]))
console.log(
  workNeeded(141, [
    [1, 55],
    [0, 25],
  ]),
)
