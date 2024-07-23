function bubblesortOnce(a) {
  const sArr = [...a]

  sArr.forEach((el, ind) => {
    if (el > sArr[ind + 1]) {
      ;[sArr[ind], sArr[ind + 1]] = [sArr[ind + 1], sArr[ind]]
    }
  })

  return sArr
}
console.log(bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8]))
