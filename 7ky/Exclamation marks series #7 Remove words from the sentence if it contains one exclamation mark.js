function remove(string) {
  const arr = string.split(' ').filter((el) => {
    const counter = el.split('').filter((item) => item === '!')
    if (counter.length != 1) return el
  })
  return arr.join(' ')
}

console.log(remove('Hi! Hi!! Hi!'))
console.log(remove('ypo! mvgd !lhjimet ntsgfuy jcg! !mejeayt'))
