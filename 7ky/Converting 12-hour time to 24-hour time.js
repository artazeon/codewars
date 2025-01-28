function to24hourtime(hour, minute, period) {
  if (period === 'pm' && hour !== 12) {
    hour += 12
  } else if (period === 'am' && hour === 12) {
    hour = 0
  }

  const fHour = hour.toString().padStart(2, '0')
  const fMinute = minute.toString().padStart(2, '0')

  return `${fHour}${fMinute}`
}

console.log(to24hourtime(1, 0, 'am'))
console.log(to24hourtime(9, 0, 'pm'))
console.log(to24hourtime(9, 45, 'pm'))
console.log(to24hourtime(12, 45, 'pm'))
console.log(to24hourtime(12, 0, 'am'))
