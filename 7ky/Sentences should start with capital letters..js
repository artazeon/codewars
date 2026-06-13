const fix = (paragraph) =>
  paragraph.length < 1
    ? ''
    : paragraph
        .split('. ')
        .map((el) => el[0].toUpperCase() + el.slice(1))
        .join('. ')

console.log(fix(''))
console.log(
  fix('hello. my name is inigo montoya. you killed my father. prepare to die.'),
)
