function cookingTime(eggs) {
  let timer = 0

  while (eggs > 0) {
    timer += 5
    eggs -= 8
  }

  return timer
}

console.log(cookingTime(0))
console.log(cookingTime(5))
console.log(cookingTime(10))
console.log(cookingTime(16))
