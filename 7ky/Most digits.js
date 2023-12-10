function findLongest(array) {
  const [maxLongest] = array.sort((a, b) => {
    return b.toString().length - a.toString().length
  })

  return maxLongest
}

console.log(findLongest([8000, 9000, 8, 800]))
