function oddOne(arr) {
  return arr.indexOf(arr.find((el) => el % 2 != 0))
}

console.log(oddOne([2, 4, 6, 7, 10]))
