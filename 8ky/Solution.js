var array = [2, 3, 5, 7, 11]

const find = (a, e) => {
  let z=a.indexOf(e)
  return z>=0?z:"Not found"
}

console.log(find(array, 5))
