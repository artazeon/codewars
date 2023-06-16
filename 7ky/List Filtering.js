function filter_list(l) {
  return l.filter((i) => {
    return typeof i == 'number'
  })
}
console.log(filter_list([1, 2, 'a', 'b']))
