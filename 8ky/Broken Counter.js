function Counter() {
  this.value = 0
}

Counter.prototype.increase = function () {
  this.value++
}

Counter.prototype.getValue = function () {
  return this.value
}

Counter.prototype.reset = function () {
  this.value = 0
}

var counter = new Counter()

console.log(counter.getValue()) // Выведет 0

counter.increase()
console.log(counter.getValue()) // Выведет 1

counter.reset()
console.log(counter.getValue()) // Выведет 0
