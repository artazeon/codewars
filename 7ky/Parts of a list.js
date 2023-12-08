function partlist(arr) {
  const res = []

  for (let i = 1; i < arr.length; i++) {
    let firstHalf = arr.slice(0, i).join(' ')
    let secondHalf = arr.slice(i).join(' ')
    res.push([`${firstHalf}`, `${secondHalf}`])
  }

  return res
}

console.log(partlist(['I', 'wish', 'I', "hadn't", 'come']))

