function getAverage(marks){

  const summ = marks.reduce((accum, item) => {
    return accum + (item)
   }, 0)

   return Math.floor((summ / (marks.length)))
  }
  


console.log(getAverage([1,2,3,4,5,]))