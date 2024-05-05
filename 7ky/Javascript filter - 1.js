function searchNames(logins) {
  result = logins.filter((el) => el[0].charAt(el[0].length - 1) == '_')
  return result
}

console.log(
  searchNames([
    ['foo', 'foo@foo.com'],
    ['bar_', 'bar@bar.com'],
  ])
)
