function warnTheSheep(queue) {
  queue.reverse()
  for (let i = 0; i <= queue.length; i++) {
    if (queue[0] == 'wolf') {
      return 'Pls go away and stop eating my sheep'
    }
    if (queue[i] == 'wolf') {
      return `Oi! Sheep number ${i - 1}! You are about to be eaten by a wolf!`
    }
  }

  return queue
}

console.log(
  warnTheSheep([
    'sheep',
    'sheep',
    'sheep',
    'sheep',
    'sheep',
    'wolf',
    'sheep',
    'sheep',
  ])
)
console.log(
  warnTheSheep([
    'sheep',
    'sheep',
    'sheep',
    'sheep',
    'sheep',
    'wolf',
    'sheep',
    'wolf',
  ])
)
