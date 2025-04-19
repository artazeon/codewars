var kookaCounter = function (laughing) {
  let female = 0
  let male = 0
  let array = laughing.split('a')

  array.forEach((element, index) => {
    if (element === 'H' && element != array[index - 1]) {
      male++
    }

    if (element === 'h' && element != array[index - 1]) {
      female++
    }
  })

  return female + male
}

console.log(kookaCounter('hahahahaha'))
console.log(kookaCounter('hahahahahaHaHaHa'))
console.log(kookaCounter('HaHaHahahaHaHa'))
