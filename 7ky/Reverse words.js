function reverseWords(str) {
  const rev = str.split(' ').map(el => el.split('').reverse().join('')).join(' ')
  return rev
}

console.log(reverseWords('double  spaced  words'))
