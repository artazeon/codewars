function maxMultiple(divisor, bound){
  let res = 888
  for (let i = bound; i >= divisor; i--) {
    if (i % divisor === 0) {
      return i
    }
  }
  
}

console.log(maxMultiple(2,7))
console.log(maxMultiple(10,50))
