function index(array, n){

  return array[n] == undefined ? -1 : Math.pow(array[n], n)

}


console.log( index([1, 2, 3, 4],2)) 
console.log( index([75,68,35,61,9,36,89,0,30], 10)) 