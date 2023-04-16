var humanYearsCatYearsDogYears = function(humanYears) {
  let allY = []
  allY.push(humanYears)
  
  if (humanYears == 1) {
    allY.push(15)
    allY.push(15)
  }
  else if (humanYears == 2) {
    allY.push(24)
    allY.push(24)
  }
  else if (humanYears > 2) {
    allY.push((humanYears-2)*4+24)
    allY.push((humanYears-2)*5+24)
  }
  
  
  return allY;

}


console.log(humanYearsCatYearsDogYears(10))