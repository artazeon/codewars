function womensAge(n) {
  return `${n}? That's just ${20 + (n % 2)}, in base ${Math.floor(n / 2)}!`
}

console.log(womensAge(32))
console.log(womensAge(39))
console.log(womensAge(22))
console.log(womensAge(65))
console.log(womensAge(83))
