function isSortedAndHow(array) {
  const unSortStr = [...array]
  const sortArr = array.sort((a, b) => a - b)

  if (unSortStr[0] === sortArr[0]) {
    return "yes, ascending"
  } else if (unSortStr[0] === sortArr[sortArr.length - 1]) {
    return "yes, descending"
  } else {
    return "no"
  }
}

console.log(isSortedAndHow([1, 2]))
console.log(isSortedAndHow([15, 7, 3, -8]))
console.log(isSortedAndHow([4, 2, 30]))
