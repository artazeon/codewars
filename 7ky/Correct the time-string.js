function timeCorrect(timestring) {
  if (timestring === '') {
    return ''
  }

  if (!/^\d{2}:\d{2}:\d{2}$/.test(timestring) || timestring === null) {
    return null
  }

  const arr = timestring.split(':')
  let sec = 0
  let min = 0
  let hour = 0

  if (arr[2] > 59) {
    sec = +arr[2] - 60
    min += 1
  } else {
    sec = arr[2]
  }

  if (+arr[1] + min > 59) {
    min = +arr[1] + min - 60
    hour += 1
  } else {
    min += +arr[1]
  }

  hour = +arr[0] + hour

  while (hour > 23) {
    hour = hour - 24
  }

  return `${String(hour).padStart(2, '0')}:${String(min).padStart(
    2,
    '0'
  )}:${String(sec).padStart(2, '0')}`
}

console.log(timeCorrect('09:10:01'), '09:10:01')
console.log(timeCorrect('11:70:10'), '12:10:10')
console.log(timeCorrect('19:99:09'), '20:39:09')
console.log(timeCorrect('19:99:99'), '20:40:39')
console.log(timeCorrect('24:01:01'), '00:01:01')
console.log(timeCorrect('52:01:01'), '04:01:01')
