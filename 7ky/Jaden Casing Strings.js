String.prototype.toJadenCase = function () {
  const arr = this.split(' ')
  
  const newArr = arr.map(el => {
   return  el.charAt(0).toUpperCase() + el.slice(1)
  })
  return newArr.join(' ')
};


const result = "How can mirrors be real if our eyes aren't real".toJadenCase()
console.log(result)
