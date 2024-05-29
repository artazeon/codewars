function sentence(arrayOfObjects) {
  const sortArr = arrayOfObjects.sort((a, b) => {
    return +Object.keys(a)[0] - +Object.keys(b)[0]
  })
  const result = sortArr.map((obj) => Object.values(obj)[0])
  return result.join(' ')
}

console.log(
  sentence([
    { 4: 'dog' },
    { 2: 'took' },
    { 3: 'his' },
    { '-2': 'Vatsan' },
    { 5: 'for' },
    { 6: 'a' },
    { 12: 'spin' },
  ])
)
