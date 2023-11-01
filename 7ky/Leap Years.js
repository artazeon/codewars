function isLeapYear(year) {
  return year % 400 === 0 ? true : year % 100 === 0 ? false : year % 4 === 0 ? true : false;
}

console.log(isLeapYear(2020))
console.log(isLeapYear(2000))
console.log(isLeapYear(2015))
console.log(isLeapYear(2100))

// Годы, кратные 4, являются високосными,
// но годы, кратные 100, не являются високосными,
// но годы, делящиеся на 400, являются високосными.
