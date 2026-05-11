function sortIt(list, n) {
  const arr = list.split(', ')

  arr.sort((a, b) => {
    const charA = a[n - 1].toLowerCase()
    const charB = b[n - 1].toLowerCase()

    if (charA !== charB) {
      return charA.localeCompare(charB)
    }

    return a.toLowerCase().localeCompare(b.toLowerCase())
  })

  return arr.join(', ')
}

console.log(sortIt('bill, bell, ball, bull', 2), 'ball, bell, bill, bull')
console.log(sortIt('cat, dog, eel, bee', 3), 'bee, dog, eel, cat')
