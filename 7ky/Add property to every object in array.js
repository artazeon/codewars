var questions = [
  {
    question: "What's the currency of the USA?",
    choices: ['US dollar', 'Ruble', 'Horses', 'Gold'],
    corAnswer: 0,
  },
  {
    question: 'Where was the American Declaration of Independence signed?',
    choices: ['Philadelphia', 'At the bottom', "Frankie's Pub", 'China'],
    corAnswer: 0,
  },
]

// const addProperty = (arr) => {

//   const newArr = questions.map(el => {
//     return el = {...el, 'usersAnswer': null}
//   })

//   return newArr
// }

// questions.forEach(el => {
//   return el = {...el, 'usersAnswer': null}
// })

for (let i = 0; i < questions.length; i++) {
  questions[i] = { ...questions[i], usersAnswer: null }
}

console.log(questions)

