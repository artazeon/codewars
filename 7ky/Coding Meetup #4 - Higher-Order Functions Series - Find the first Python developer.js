const list = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python1' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
]


function getFirstPython(list) {
  const first = list.find((el) => el.language === 'Python')
  console.log(first)
  return first ? `${first.firstName}, ${first.country}` : `There will be no Python developers`
}


console.log(getFirstPython(list))
