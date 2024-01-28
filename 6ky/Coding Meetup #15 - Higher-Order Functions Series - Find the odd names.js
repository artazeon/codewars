var list1 = [
  {
    firstName: 'Aba',
    lastName: 'N.',
    country: 'Ghana',
    continent: 'Africa',
    age: 21,
    language: 'Python',
  },
  {
    firstName: 'Abb',
    lastName: 'O.',
    country: 'Israel',
    continent: 'Asia',
    age: 39,
    language: 'Java',
  },
]

function findOddNames(list) {
  const res = list.filter((el) => {
    let nameArr = el.firstName.split('')
    let temp = nameArr.reduce((acc, char) => acc + char.charCodeAt(0), 0)
    if (temp % 2 != 0) {
      return el
    }
  })
  return list.length === res.length ? [] : res
}

console.log(findOddNames(list1))
