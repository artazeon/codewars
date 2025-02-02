function distancesFromAverage(arr) {
  const average = arr.reduce((acc, el) => acc + el / arr.length, 0)
  const distancesArr = arr.map((el) => Number((average - el).toFixed(2)))
  return distancesArr
}

console.log(distancesFromAverage([55, 95, 62, 36, 48]))
