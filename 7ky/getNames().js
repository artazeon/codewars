const getNames = (data) => data.map((i) => i.name)

var data = [
  { name: 'Joe', age: 20 },
  { name: 'Bill', age: 30 },
  { name: 'Kate', age: 23 },
]

getNames(data)

console.log(getNames(data))
