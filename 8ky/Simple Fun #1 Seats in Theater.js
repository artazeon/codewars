function seatsInTheater(nCols, nRows, col, row) {
  const totalPlaceZan = (nCols-col+1) * (nRows-row)
  return totalPlaceZan
  
}


console.log( seatsInTheater(16,11,5,3) )