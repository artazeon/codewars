// function partsSums(ls) {
//   const length = ls.length
//   res = []

//   for (let i = 0; i <= length; i++) {
//     let sum = ls.slice(i).reduce((acc, el) => {
//       return acc + el
//     }, 0)
//     res.push(sum)
  
//   }
//   return res
// }

function partsSums(ls) {
  const res = new Array(ls.length + 1);
  
  res[ls.length] = 0; // Инициализируем последний элемент нулем
 

  for (let i = ls.length - 1; i >= 0; i--) {
    
    res[i] = res[i + 1] + ls[i];
    console.log(res[i + 1])
  }

  return res;
}


console.log(partsSums([0, 1, 3, 6, 10]))
