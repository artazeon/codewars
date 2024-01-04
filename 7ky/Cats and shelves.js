function solution(start, finish) {
  let count = 0
  let currentStep = start

  while (currentStep < finish) {
    if (currentStep + 3 === finish) {
      count++
      currentStep += 3
    } else {
      count++
      currentStep++
    }
  }

  return count
}

console.log(solution(1, 5))//2
console.log(solution(2, 4))//2
