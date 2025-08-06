function filterWords(phrase) {
  return phrase.replace(/bad|mean|ugly|horrible|hideous/gi, 'awesome')
}

console.log(filterWords("You're Bad! timmy!"))
console.log(filterWords("You're MEAN! timmy!"))
