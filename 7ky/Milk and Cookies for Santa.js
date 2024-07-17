function timeForMilkAndCookies(date) {
  const day = date.getDate()
  const month = date.getMonth()

  return day === 24 && month === 11
}

console.log(timeForMilkAndCookies(new Date(1994, 11, 24)))
