function reverseNumber(n) {
    rev = parseInt(n.toString().split('').reverse().join(''))
  return n>=0 ? rev : -rev 
}

console.log(reverseNumber(123))
console.log(reverseNumber(-123))

