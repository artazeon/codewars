function betterThanAverage(classPoints, yourPoints) {
  const average = (classPoints.reduce((ac, i) => {
    return ac += i
  }, 0)) / classPoints.length 
  console.log (average)

  return average < yourPoints ? true : false;
}


console.log( betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75) )