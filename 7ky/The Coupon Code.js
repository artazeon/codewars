function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  const currDate = new Date(currentDate);
  const expDate = new Date(expirationDate);
  return currDate <= expDate && enteredCode === correctCode
}

console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'))
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014'))
