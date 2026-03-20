function sortByLanguage(list) {
  return list.sort((a, b) => {
    const compare = a.language.localeCompare(b.language)
    return compare !== 0 ? compare : a.firstName.localeCompare(b.firstName)
  })
}

var list1 = [
  {
    firstName: 'Nikau',
    lastName: 'R.',
    country: 'New Zealand',
    continent: 'Oceania',
    age: 39,
    language: 'Ruby',
  },
  {
    firstName: 'Precious',
    lastName: 'G.',
    country: 'South Africa',
    continent: 'Africa',
    age: 22,
    language: 'JavaScript',
  },
  {
    firstName: 'Maria',
    lastName: 'S.',
    country: 'Peru',
    continent: 'Americas',
    age: 30,
    language: 'C',
  },
  {
    firstName: 'Agustin',
    lastName: 'V.',
    country: 'Uruguay',
    continent: 'Americas',
    age: 19,
    language: 'JavaScript',
  },
]
console.log(sortByLanguage(list1))
