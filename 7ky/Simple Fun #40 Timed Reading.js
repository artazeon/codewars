function timedReading(maxLength, text) {
  return text
    .replace(/[?!,.']/g, '')
    .split(' ')
    .filter((el) => el && el.length <= maxLength).length
}

console.log(timedReading(4, "The Fox asked the stork, 'How is the soup?'"), 7)
console.log(timedReading(1, '...'), 0)
