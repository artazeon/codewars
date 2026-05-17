function correctness(bobsDecisions, expertDecisions) {
  let count = 0

  bobsDecisions.forEach((bob, ind) => {
    let expert = expertDecisions[ind]

    if (bob === expert) {
      count += 1
    } else if (bob === '?' || expert === '?') {
      count += 0.5
    }
  })

  return count
}

console.log(correctness(['M', 'F', '?'], ['M', 'F', '?']))
console.log(correctness(['M', '?', 'M'], ['M', 'F', '?']))
