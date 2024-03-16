function caffeineBuzz(num) {
  if (num % 3 === 0 && num % 4 === 0) {
    if (num % 2 === 0) {
      return 'CoffeeScript'
    } else {
      return 'Coffee'
    }
  } else if (num % 3 === 0) {
    if (num % 2 === 0) {
      return 'JavaScript'
    } else {
      return 'Java'
    }
  } else {
    return 'mocha_missing!'
  }
}

console.log(caffeineBuzz(1))
console.log(caffeineBuzz(3))
console.log(caffeineBuzz(6))
console.log(caffeineBuzz(12))
console.log(caffeineBuzz(4))
