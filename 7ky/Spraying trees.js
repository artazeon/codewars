function task(w, t, c) {
  const wordDays = {
    Monday: 'James',
    Tuesday: 'John',
    Wednesday: 'Robert',
    Thursday: 'Michael',
    Friday: 'William',
  }

  return `It is ${w} today, ${
    wordDays[w]
  }, you have to work, you must spray ${t} trees and you need ${
    t * c
  } dollars to buy liquid`
}

console.log(task('Wednesday', 10, 2))
