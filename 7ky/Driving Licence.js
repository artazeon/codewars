function driver(data) {
  const [firstName, middleName, lastName, dob, gender] = data

  let lastNamePart = lastName.toUpperCase().padEnd(5, '9').slice(0, 5)

  const [day, monthStr, year] = dob.split('-')
  const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ]
  const month = (months.indexOf(monthStr.slice(0, 3).toUpperCase()) + 1)
    .toString()
    .padStart(2, '0')

  let decadeYear = year[2]

  let birthMonth = gender === 'F' ? (parseInt(month) + 50).toString() : month

  let birthDay = day.padStart(2, '0')

  let lastYearDigit = year[3]

  let initials =
    firstName[0].toUpperCase() +
    (middleName ? middleName[0].toUpperCase() : '9')

  let randomDigit = '9'

  let checkDigits = 'AA'

  return `${lastNamePart}${decadeYear}${birthMonth}${birthDay}${lastYearDigit}${initials}${randomDigit}${checkDigits}`
}

console.log(driver(['John', 'James', 'Smith', '01-Jan-2000', 'M']))
