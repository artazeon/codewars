function histogram(results) {
  let hist = ''

  results.forEach((element, index) => {
    hist =
      `${index + 1}|` +
      `${element ? '#'.repeat(element) + ' ' : ''}` +
      `${element ? `${element}` : ''}` +
      `\n` +
      hist
  })
  return hist
}
console.log(histogram([7, 3, 10, 1, 0, 5]))

// `6|##### 5
// 5|
// 4|# 1
// 3|########## 10
// 2|### 3
// 1|####### 7
// `
