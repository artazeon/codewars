function daysRepresented(trips) {
  const days = new Set()

  for (let [start, end] of trips) {
    for (let d = start; d <= end; d++) {
      days.add(d)
    }
  }

  return days.size
}

console.log(
  daysRepresented([
    [2, 8],
    [220, 229],
    [10, 16],
  ]),
)
