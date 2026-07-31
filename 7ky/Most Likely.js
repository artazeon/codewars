function mostLikely(prob1, prob2) {
  const first = prob1.split(':')
  const second = prob2.split(':')
  return first[0] / first[1] > second[0] / second[1]
}

console.log(mostLikely('1:3', '1:2'))
