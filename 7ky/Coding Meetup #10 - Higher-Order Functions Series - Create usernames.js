var list1 = [
  {
    firstName: 'Emily',
    lastName: 'N.',
    country: 'Ireland',
    continent: 'Europe',
    age: 30,
    language: 'Ruby',
  },
  {
    firstName: 'Nor',
    lastName: 'E.',
    country: 'Malaysia',
    continent: 'Asia',
    age: 20,
    language: 'Clojure',
  },
]

function addUsername(list) {
  const listUserNamed = list.map(el => {
    return { ...el, username: `${el.firstName.toLowerCase()}${el.lastName[0].toLowerCase()}${new Date().getFullYear()-el.age}` }
  })
  return listUserNamed
}



console.log(addUsername(list1))

