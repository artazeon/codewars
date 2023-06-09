function toCsvText(array) {
  let tempArr = array.map((item) => item.join(','))
  let newArr =  tempArr.join('\n')
  return newArr
 }
console.log(toCsvText([[ 0, 1, 2, 3, 45], 
  [ 0, 1, 2, 3, 45]]))
