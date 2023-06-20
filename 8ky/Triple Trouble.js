function tripleTrouble(one, two, three){
  let newStr = ''
  
  for (let i = 0; i < one.length; i++) {
    newStr = newStr + one[i] + two[i]  + three[i]
  }
  
  return newStr
 }