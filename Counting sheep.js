function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce((accum, item) => {
    if(item === true) {
      accum++
    }
    return accum
  },0)
}

array1 = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true ];

console.log(countSheeps(array1))