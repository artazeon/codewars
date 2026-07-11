function countAnimals(animals, count) {
  let result = []
  for (var word of count) {
    var reg = new RegExp(word)
    result.push((animals.match(new RegExp(reg, 'g')) || []).length)
  }

  return result
}

console.log(countAnimals('dog,cat', ['dog', 'cat']))
console.log(countAnimals('dog,dog,cat', ['dog', 'cat']))
console.log(countAnimals('dog,dog,cat', ['pig', 'cow']))
