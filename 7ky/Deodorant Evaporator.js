function evaporator(content, evap_per_day, threshold) {
  let day = 0
  let criticalContent = (content / 100) * threshold

  for (let i = 1; content > criticalContent; i++) {
    content = content - (content / 100) * evap_per_day
    day = i
  }

  return day
}
console.log(evaporator(10, 10, 5))
