function counterEffect(hitCount) {
  const arr = []

  for (let i = 0; i < hitCount.length; i++) {
    let subArr = []

    for (let j = 0; j <= hitCount[i]; j++) {
      subArr.push(j)
    }

    arr.push(subArr)
  }

  return arr
}

console.log(counterEffect('1250'))
