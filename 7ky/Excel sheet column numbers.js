function titleToNumber(title) {
  return title
    .split('')
    .reverse()
    .map((el, ind) => (el.charCodeAt() - 64) * 26 ** ind)
    .reduce((acc, el) => acc + el, 0)
}

console.log(titleToNumber('A'), 1)
console.log(titleToNumber('Z'), 26)
console.log(titleToNumber('AA'), 27)
console.log(titleToNumber('AZ'), 52)
console.log(titleToNumber('BA'), 53)
