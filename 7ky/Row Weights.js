function rowWeights(array){
  let weightTeam1 = 0
  let weightTeam2 = 0
  array.forEach((el,ind) => {
    if (ind % 2 === 0) {
    weightTeam1 += el
    }
    else {
     weightTeam2 += el
    }
  });
  return [weightTeam1, weightTeam2]
}

console.log(rowWeights([50,60,70,80]))
