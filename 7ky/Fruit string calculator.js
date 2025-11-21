function calculate(string) {
  return eval(
    string
      .replace(/loses/g, '-')
      .replace(/gains/g, '+')
      .replace(/[A-Za-z ]/g, '')
  )
}

console.log(calculate('Panda has 48 apples and loses 4'))
