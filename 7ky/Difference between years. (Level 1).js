var howManyYears = function (date1, date2) {
  let year1 = date1.split('/')[0]
  let year2 = date2.split('/')[0]
  return Math.abs(year1 - year2)
}
console.log(howManyYears('1997/10/10', '2015/10/10'))
