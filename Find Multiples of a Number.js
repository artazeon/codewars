function findMultiples(integer, limit) {
  let arr = []
  for (let i = integer; i <= limit; i +=integer) {
    arr.push(i)
  }
  
  return arr
}


console.log(findMultiples(5, 25))