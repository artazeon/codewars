function dutyFree(normPrice, discount, hol){
  const discPrice = normPrice / 100 * discount
  const howNeedBuy = Math.floor( hol / discPrice )
  return howNeedBuy
}

console.log(dutyFree(12, 50, 1000))
console.log(dutyFree(17, 10, 500))
