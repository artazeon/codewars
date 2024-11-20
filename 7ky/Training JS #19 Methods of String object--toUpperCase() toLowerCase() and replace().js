function alienLanguage(str) {
  return str.toUpperCase().replace(/\w\b/g, (x) => x.toLowerCase())
}
console.log(alienLanguage('My name is John'))
