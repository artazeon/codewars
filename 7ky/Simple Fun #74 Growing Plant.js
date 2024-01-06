function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let day = 1
  let length = upSpeed

  while (length < desiredHeight) {
    length = length + upSpeed - downSpeed
    day++
  }

  return day
}
console.log(growingPlant(100, 10, 910))
