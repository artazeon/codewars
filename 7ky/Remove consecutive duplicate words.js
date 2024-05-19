function removeConsecutiveDuplicates(string) {
  const arr = string.split(' ')
  const filterArr = arr.filter((el, ind) => el != arr[ind + 1])
  return filterArr.join(' ')
}

console.log(
  removeConsecutiveDuplicates(
    'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
  )
)
//"alpha beta gamma delta alpha beta gamma delta"
