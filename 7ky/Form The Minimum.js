function minValue(values){
  values.sort((a,b)=>a-b)
  const res = values.filter((el, ind) => values.indexOf(el) === ind)
  return +res.join('')
}
console.log(minValue([1, 3, 1]))
console.log(minValue([4, 7, 5, 7]))
console.log(minValue([5, 7, 9, 5, 7]))
