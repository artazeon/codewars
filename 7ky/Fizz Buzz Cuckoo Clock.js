function fizzBuzzCuckooClock(time) {
  let [hours, minutes] = time.split(':').map(Number)
  if (hours > 12) hours -= 12
  if (minutes === 30) return 'Cuckoo'

  if (minutes === 0) {
    const cuckooCount = hours === 0 || hours === 12 ? 12 : hours
    return 'Cuckoo '.repeat(cuckooCount).trim()
  }

  if (minutes % 3 === 0 && minutes % 5 === 0) return 'Fizz Buzz'
  if (minutes % 3 === 0) return 'Fizz'
  if (minutes % 5 === 0) return 'Buzz'

  return 'tick'
}

console.log(fizzBuzzCuckooClock('13:34'))
console.log(fizzBuzzCuckooClock('21:00'))
console.log(fizzBuzzCuckooClock('11:15'))
console.log(fizzBuzzCuckooClock('03:03'))
console.log(fizzBuzzCuckooClock('14:30'))
console.log(fizzBuzzCuckooClock('08:55'))
console.log(fizzBuzzCuckooClock('00:00'))
console.log(fizzBuzzCuckooClock('12:00'))
