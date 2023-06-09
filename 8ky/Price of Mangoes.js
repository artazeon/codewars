function mango(quantity, price){
  const totalPrice = quantity*price
  const freeQuantity = Math.floor(quantity/3)



  return totalPrice - freeQuantity * price
}

console.log(mango(8, 3))