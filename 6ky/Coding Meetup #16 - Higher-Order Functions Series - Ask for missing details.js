var list1 = [
  {
    firstName: null,
    lastName: 'I.',
    country: 'Argentina',
    continent: 'Americas',
    age: 35,
    language: 'Java',
  },
  {
    firstName: 'Lukas',
    lastName: 'X.',
    country: 'Croatia',
    continent: 'Europe',
    age: 35,
    language: null,
  },
  {
    firstName: 'Madison',
    lastName: 'U.',
    country: 'United States',
    continent: 'Americas',
    age: 32,
    language: 'Ruby',
  },
]

function askForMissingDetails(list) {
  const ask = list.map((el) => {
    let none = false
    for (let key in el) {
      if (el[key] === null) {
        none = key
      }
    }

    if (none) {
      return {
        ...el,
        question: `Hi, could you please provide your ${none}`,
      }
    }
  })

  return ask.filter((el) => el !== undefined)
}

console.log(askForMissingDetails(list1))

let a = [ { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', question: 'Hi, could you please provide your firstName' }, { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null, question: 'Hi, could you please provide your language' } ]
let b = [ { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', question: 'Hi, could you please provide your firstName.' }, { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null, question: 'Hi, could you please provide your language.' } ]