function myLanguages(obj) {
  const goodScore = []
  const arrSort = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  arrSort.forEach(el => {el[1] >= 60 ? goodScore.push(el[0]):true})
  return goodScore
}

console.log(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}))
console.log(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}))
