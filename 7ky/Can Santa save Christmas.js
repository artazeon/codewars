function determineTime(durations) {
  const totalSecond = durations.reduce((acc, el) => {
    const [hours, minutes, seconds] = el.split(':')
    return acc + +hours * 3600 + +minutes * 60 + +seconds
  }, 0)

  return totalSecond <= 86400
}

console.log(determineTime(['04:30:00', '02:00:00', '01:30:00', '16:00:00']))
