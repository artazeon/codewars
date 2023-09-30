var number=function(array){
  return array.map((el, ind) => `${ind+1}: ${el}`)
}

console.log(number(["a", "b", "c"]))

