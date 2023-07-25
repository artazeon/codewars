function shiftedDiff(first, second) {
  let count = 0

  for (i = 0; i < second.length; i++) {
    if (first !== second) {
    let lastChar = first.substr(-1)
    let rest = first.slice(0, -1)
    first = lastChar.concat(rest)
    count++
  }
  
  if (first !== second && i === second.length-1) {
    count = -1
  }

  }

  return count
}

console.log(shiftedDiff('eecoff', 'coffee'))
console.log(shiftedDiff("Moose","moose"))
