function getDivisorsCnt(n){
  

  let res = 0

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      if (i === n / i) {
        res += 1
      } else {
        res += 2; 
      }
    }
  }

  return res
}

console.log(getDivisorsCnt(10))
console.log(getDivisorsCnt(500000))
console.log(getDivisorsCnt(6469693230))


