function nthSmallest(arr, pos){
  const sortArr = arr.sort((a,b)=>a-b)
  return sortArr[pos - 1]
}

console.log(nthSmallest([15,20,7,10,4,3], 3))

