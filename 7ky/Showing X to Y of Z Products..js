var paginationText = function (pageNumber, pageSize, totalProducts) {
  let start = (pageNumber - 1) * pageSize + 1
  let end = pageNumber * pageSize
  if (end > totalProducts) {
    end = totalProducts
  }
  return `Showing ${start} to ${end} of ${totalProducts} Products.`
}

console.log(paginationText(1, 10, 30), 'Showing 1 to 10 of 30 Products.')
console.log(paginationText(3, 10, 26), 'Showing 21 to 26 of 26 Products.')
