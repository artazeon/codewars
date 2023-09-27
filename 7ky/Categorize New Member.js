function openOrSenior(data){
  const res = data.map(el => {
    if (el[0] >= 55 && el[1] > 7) {
      return 'Senior'
    }
    else {
      return 'Open'
    }
  })
  
  return res
}



console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))
console.log(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]))

