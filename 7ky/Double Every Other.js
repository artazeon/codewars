function doubleEveryOther(a) {
  return a.map((el, ind) => (ind % 2 != 0 ? el * 2 : el))
}

console.log(doubleEveryOther([1, 2, 3, 4]))
