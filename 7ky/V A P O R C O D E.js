function vaporcode(string) {


  
  return string.replaceAll(' ', '').split('').map(el=>el.toUpperCase()).join('  ')
}

console.log(vaporcode(`Let's go to the movies`))
console.log(vaporcode('Why isnt my code working'))
