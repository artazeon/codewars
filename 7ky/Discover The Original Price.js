function discoverOriginalPrice(discountedPrice, salePercentage) {
  let price = discountedPrice / (1 - salePercentage / 100)
  return Number.isInteger(price) ? price : +price.toFixed(2)
}
console.log(discoverOriginalPrice(75, 25))
