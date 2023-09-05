function getLengthOfMissingArray(arrayOfArrays) {
  if ( arrayOfArrays === null || arrayOfArrays.length === 0) {
    return 0
  }
  if (arrayOfArrays.some((item) => item === null || item.length === 0)) {
    return 0
  }

  arrayOfArrays.sort((a, b) => a.length - b.length)

  let number = arrayOfArrays.map((el) => el.length || el)
  let res = 0

 
  for (let i = number[0]; i <= number.length; i++) {
    if (i !== number[i - number[0]]) {
      res = i
      break
    }
  }

  return res
}



console.log(getLengthOfMissingArray([ [ 0, 3, 1 ],  [ 2, 0, 1, 4 ],  [ 3, 4, 3, 4, 2, 3, 0 ], [ 1, 2, 4, 2, 1, 3 ]]))