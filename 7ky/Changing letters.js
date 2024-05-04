function swap(string) {
  return string.replace(/[aeiou]/gi, (el, i) => el.toUpperCase())
}
console.log(swap('HelloWorld!'))
