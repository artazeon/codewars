const spongeMeme = (sentence) =>
  sentence
    .split('')
    .map((el, ind) => (ind % 2 ? el.toLowerCase() : el.toUpperCase()))
    .join('')

console.log(spongeMeme('stop Making spongebob Memes!'))
