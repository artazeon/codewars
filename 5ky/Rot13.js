function rot13(message) {
  const arr = message.split('')

  const cryptArr = arr.map((el) => {
    let number = el.charCodeAt(0)

    if (number >= 65 && number <= 90) {
      number = ((number - 65 + 13) % 26) + 65
    } else if (number >= 97 && number <= 122) {
      number = ((number - 97 + 13) % 26) + 97
    }

    return String.fromCharCode(number)
  })

  return cryptArr.join('')
}

console.log(rot13('test'))
console.log(rot13('Test'))
