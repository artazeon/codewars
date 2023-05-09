function shortenToDate(longDate) {
  return longDate.split(',')[0]
}

console.log(shortenToDate("Friday May 2, 9am"))