function dontGiveMeFive(start, end) {
  const arr = []

  for (let i = start; i <= end; i++)
    if (!i.toString().includes('5')) {
      arr.push(i)
    }
  return arr.length
}

console.log(dontGiveMeFive(4, 17))
