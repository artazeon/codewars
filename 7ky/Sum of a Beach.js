function sumOfABeach(beach) {
  let count = beach.toLowerCase().match(/sand|fish|water|sun/g) || []
  return count.length
}

console.log(sumOfABeach('GolDeNSanDyWateRyBeaChSuNN'))
