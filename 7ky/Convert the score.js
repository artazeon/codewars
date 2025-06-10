function scoreboard(string) {
  const wordsToNumbers = {
    nil: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  }

  const arr = string.split(' ')
  const goal1 = arr[arr.length - 2]
  const goal2 = arr[arr.length - 1]

  return [wordsToNumbers[goal1], wordsToNumbers[goal2]]
}

console.log(scoreboard('The score is four nil'))
