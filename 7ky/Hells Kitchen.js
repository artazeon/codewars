function gordon(a) {
  const upperA = a.toUpperCase().split('')
  const result = upperA.map((el) => {
    return el === 'A'
      ? '@'
      : /^[EIOU]$/.test(el)
      ? '*'
      : el === ' '
      ? '!!!! '
      : el
  })
  return result.join('') + '!!!!'
}

console.log(gordon('What feck damn cake'))
