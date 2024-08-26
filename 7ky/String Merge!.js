function stringMerge(string1, string2, letter) {
  const indS1 = string1.indexOf(letter)
  const indS2 = string2.indexOf(letter)

  const newS1 = string1.slice(0, indS1)
  const newS2 = string2.slice(indS2)

  return newS1 + newS2
}

console.log(stringMerge('person', 'here', 'e'))
