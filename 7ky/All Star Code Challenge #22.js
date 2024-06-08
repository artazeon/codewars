function toTime(seconds) {
  let hour = 0
  let min = 0

  if (seconds >= 60) {
    min = seconds / 60
  }

  if (min >= 60) {
    hour = Math.floor(min / 60)
    min = min - hour * 60
  }

  return `${hour} hour(s) and ${Math.floor(min)} minute(s)`
}

console.log(toTime(3500))
