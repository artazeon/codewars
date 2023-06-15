function findOdd(A) {
  let obj = {}

  for (let i = 0; i < A.length; i++) {
    if (obj[A[i]]) {
      obj[A[i]]++
    } else {
      obj[A[i]] = 1
    }
  }

  let res = 0
  for (let i = 0; i < Object.keys(obj).length; i++) {
    if (obj[Object.keys(obj)[i]] % 2 === 1) {
      res = Object.keys(obj)[i]
      break
    } else {
      continue
    }
  }

  return res
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]))
