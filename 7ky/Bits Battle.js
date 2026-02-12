function bitsBattle(numbers) {
  let evens = 0
  let odds = 0

  numbers.forEach((num) => {
    if (num === 0) return

    const binary = num.toString(2)

    if (num % 2 === 0) {
      evens += binary.split('0').length - 1
    } else {
      odds += binary.split('1').length - 1
    }
  })

  if (odds > evens) return 'odds win'
  if (evens > odds) return 'evens win'
  return 'tie'
}

console.log(bitsBattle([5, 3, 14]))
