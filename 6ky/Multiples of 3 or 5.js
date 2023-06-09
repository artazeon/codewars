function solution(number) {
  const arr = []
  for (let i = 1; i < number; i++) {
    arr.push(i)
  }

  const arrF = arr.filter((i) => {
    return i % 3 === 0 || i % 5 === 0
  })

  const sumArr = arrF.reduce((ac, i) => {
    return ac+i
  }, 0
  )
  return sumArr 
}

console.log(solution(10))
