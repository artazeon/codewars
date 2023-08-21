
function partsSums(ls) {
  const res = new Array(ls.length + 1);
  res[ls.length] = 0; 
  for (let i = ls.length - 1; i >= 0; i--) {
    
    res[i] = res[i + 1] + ls[i];
    
  }

  return res;
}


console.log(partsSums([0, 1, 3, 6, 10]))
