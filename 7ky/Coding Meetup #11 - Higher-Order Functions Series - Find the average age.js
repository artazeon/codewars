var list1 = [
  { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];



function getAverageAge(list) {
  const age = list.reduce((ac,el)=>ac+el.age/list.length,0)
  return Math.round(age)
}



console.log(getAverageAge(list1))

