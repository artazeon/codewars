function numberToPower(number, power){
  console.info(Math.log2(1024));
  let res = 1
 for (let i = 1; i <= power; i++) {
  res *= number
 }

 return res
}

console.log(numberToPower(10, 4))