function planeSeat(a) {
  const num = a.slice(0, -1)
  const letter = a.slice(-1)

  let part1 = ''
  let part2 = ''

  if (num >= 1 && num <= 20) {
    part1 = 'Front-'
  } else if (num <= 40) {
    part1 = 'Middle-'
  } else if (num <= 60) {
    part1 = 'Back-'
  } else {
    return 'No Seat!!'
  }

  if ('ABC'.includes(letter)) {
    part2 = 'Left'
  } else if ('DEF'.includes(letter)) {
    part2 = 'Middle'
  } else if ('GHK'.includes(letter)) {
    part2 = 'Right'
  } else {
    return 'No Seat!!'
  }

  return part1 + part2
}

console.log(planeSeat('2B'), 'Front-Left')
console.log(planeSeat('20B'), 'Front-Left')
console.log(planeSeat('58I'), 'No Seat!!')
