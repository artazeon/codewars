function isVeryEvenNumber(n) {
  const sum = (item) =>
    String(item)
      .split('')
      .reduce((acc, el) => acc + +el, 0)

  if (n < 10) return n % 2 === 0

  return isVeryEvenNumber(sum(n))
}

console.log(isVeryEvenNumber(222))
console.log(isVeryEvenNumber(88))
console.log(isVeryEvenNumber(841))
