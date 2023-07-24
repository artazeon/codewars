function findMissing(list) {
  const step = (list[list.length - 1] - list[0]) / list.length;
  let miss = -1;
  
  for (let i = 0; i < list.length - 1; i++) {
    if (list[i + 1] - list[i] !== step) {
      miss = list[i] + step;
      break;
    }
  }
  
  return miss;
}

console.log(findMissing([ 0, -1, -3]))
