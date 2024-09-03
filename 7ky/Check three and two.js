function checkThreeAndTwo(array) {
  const counter = {}

  array.forEach((element) => {
    if (counter[element]) {
      counter[element]++
    } else {
      counter[element] = 1
    }
  })

  const [x, y] = Object.keys(counter)

  return (
    (counter[x] == 3 && counter[y] == 2) || (counter[x] == 2 && counter[y] == 3)
  )
}

console.log(checkThreeAndTwo(['a', 'a', 'a', 'b', 'b']))
