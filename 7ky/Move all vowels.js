function moveVowel(input) {
  let part2 = ''
  const part1 = input.split('').filter((el) => {
    if (!/[aeiou]/i.test(el)) {
      return el
    } else {
      part2 += el
    }
  })

  return part1.join('') + part2
}

console.log(moveVowel('apple'))
