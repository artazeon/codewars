var paintLetterboxes = function (start, end) {
  const arr = Array.from({ length: 10 }, () => 0)

  for (let i = 0; start <= end; i++) {
    const temp = start.toString().split('')
    temp.forEach((el) => {
      arr[el]++
    })
    start++
  }

  return arr
}

console.log(paintLetterboxes(125, 132))
