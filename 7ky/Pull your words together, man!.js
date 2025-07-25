function sentencify(words) {
  if (!words.length) return ''

  const firstWord = words[0]
  const firstWordUpper = firstWord[0].toUpperCase() + firstWord.slice(1)

  return `${[firstWordUpper, ...words.slice(1)].join(' ')}.`
}

console.log(sentencify(['i', 'am', 'an', 'AI']))
