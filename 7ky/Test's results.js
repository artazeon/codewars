function testResult(array) {
  let class_average = 0
  const dictionary = { h: 0, a: 0, l: 0 }

  for (let i = 0; i < array.length; i++) {
    class_average += array[i] / array.length

    if (array[i] >= 9) dictionary.h++
    if (array[i] >= 7 && array[i] <= 8) dictionary.a++
    if (array[i] < 7) dictionary.l++
  }

  return dictionary.a === 0 && dictionary.l === 0
    ? `${[+class_average.toFixed(3), dictionary]} 'They did well'`
    : [+class_average.toFixed(3), dictionary]
}

console.log(testResult([10, 9, 9, 10, 9, 10, 9]))
console.log(testResult([5, 6, 4, 8, 9, 8, 9, 10, 10, 10]))
