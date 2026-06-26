function countVegetables(string) {
  const vegetables = [
    'cabbage',
    'carrot',
    'celery',
    'cucumber',
    'mushroom',
    'onion',
    'pepper',
    'potato',
    'tofu',
    'turnip',
  ]
  const obj = {}

  const arr = string.split(' ')

  arr.forEach((element) => {
    if (!vegetables.includes(element)) return

    if (obj[element]) {
      obj[element] = obj[element] + 1
    } else {
      obj[element] = 1
    }
  })

  let result = []

  for (let key in obj) {
    result.push([obj[key], key])
  }

  result.sort((a, b) => {
    if (b[0] !== a[0]) {
      return b[0] - a[0]
    }

    return b[1].localeCompare(a[1])
  })

  return result
}

let lst1 = [
  [2, 'tofu'],
  [2, 'potato'],
  [2, 'cucumber'],
  [2, 'cabbage'],
  [1, 'turnip'],
  [1, 'pepper'],
  [1, 'onion'],
  [1, 'mushroom'],
  [1, 'celery'],
  [1, 'carrot'],
]

let s1 =
  'potato tofu cucumber cabbage turnip pepper onion carrot celery mushroom potato tofu cucumber cabbage'

console.log(countVegetables(s1), lst1)
