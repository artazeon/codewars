function capitalsFirst(str) {
  const arr = str.split(' ')

  const upper = arr.filter((el) => /^[A-ZА-Я]/.test(el))
  const lower = arr.filter((el) => /^[a-zа-я]/.test(el))

  return [...upper, ...lower].join(' ')
}

console.log(capitalsFirst('hey You, Sort me Already!'))
console.log(
  capitalsFirst('Life Sometimes !Hard gets pretty !Hard'),
  'Life Sometimes gets pretty'
)
