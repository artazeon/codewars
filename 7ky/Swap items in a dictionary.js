function switchDict(dic) {
  let res = {}

  Object.keys(dic).forEach((key) => {
    const value = dic[key]

    if (res[value]) {
      res[value].push(key)
    } else {
      res = { ...res, [value]: [key] }
    }
  })

  return res
}
console.log(
  switchDict({
    Ice: 'Cream',
    Age: '21',
    Light: 'Cream',
    Double: 'Cream',
  }),
)
