function counter() {
  let count = 0

  return function () {
    count++
    return count
  }
}

const newCounter = counter()

console.log(newCounter())
console.log(newCounter())
