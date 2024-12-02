function scrollingText(text) {
  text = text.toUpperCase()

  let result = []

  for (let i = 0; i < text.length; i++) {
    const temp = text.slice(i) + text.slice(0, i)
    result.push(temp)
  }

  return result
}

console.log(scrollingText('abc'))
console.log(scrollingText('codewars'))
