function filterHomogenous(arrays) {
  const filtredArr = arrays.filter((el) => {
    const temp = el.filter((item) => typeof item === typeof el[0])
    return temp.length > 0 && temp.length === el.length
  })

  return filtredArr
}

console.log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]))
console.log(
  filterHomogenous([[123, 234, 432], ['', 'abc'], [''], ['', 1], ['', '1'], []])
)
