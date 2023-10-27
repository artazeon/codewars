function checkExam(array1, array2) {
  const res = array2.reduce((accum, el, ind) => {
    if (el === array1[ind]) {
      return (accum += 4)
    } else if (el === '') {
      return (accum += 0)
    } else {
      return (accum += -1)
    }
  }, 0)

  return res < 0 ? 0 : res
}

console.log(checkExam(['a', 'a', 'b', 'b'], ['a', 'c', 'b', 'd']))
console.log(checkExam(['a', 'a', 'c', 'b'], ['a', 'a', 'b', '']))
console.log(checkExam(['b', 'c', 'b', 'a'], ['', 'a', 'a', 'c']))
