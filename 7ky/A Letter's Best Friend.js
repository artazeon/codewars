function bestFriend(txt, a, b) {
  const arr = txt.split('')
  const onePart = arr.filter((el) => el === a)
  const fullPart = arr.filter((el, ind) => el === a && arr[ind + 1] === b)

  return onePart.length === fullPart.length
}

console.log(bestFriend('he headed to the store', 'h', 'e'))
