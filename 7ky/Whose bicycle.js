function whoseBicycle(diary1, diary2, diary3) {
  const sum = (son) => Object.values(son).reduce((acc, el) => acc + el, 0)

  const sum1Son = sum(diary1)
  const sum2Son = sum(diary2)
  const sum3Son = sum(diary3)

  if (sum1Son > sum2Son && sum1Son > sum3Son) {
    return 'I need to buy a bicycle for my first son.'
  } else if (
    (sum2Son > sum1Son && sum2Son > sum3Son) ||
    (sum1Son === sum2Son && sum2Son > sum3Son)
  ) {
    return 'I need to buy a bicycle for my second son.'
  } else {
    return 'I need to buy a bicycle for my third son.'
  }
}

console.log(
  whoseBicycle(
    { algebra: 6, history: 7, physics: 8, geography: 9, chemistry: 10 },
    { algebra: 6, history: 7, physics: 8, geography: 9, chemistry: 10 },
    { algebra: 6, history: 7, physics: 8, geography: 9, chemistry: 10 }
  )
)
