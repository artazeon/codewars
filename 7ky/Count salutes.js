function countSalutes(hallway) {
  const arr = hallway.split('')

  let rightMoving = 0
  let meet = 0

  arr.forEach((el) => {
    if (el === '>') {
      rightMoving++
    }
    if (el === '<') {
      meet += rightMoving
    }
  })

  return meet * 2
}

console.log(countSalutes('>----->-----<--<'))
