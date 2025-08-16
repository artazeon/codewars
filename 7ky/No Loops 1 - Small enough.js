function smallEnough(a, limit) {
  return a.every((el) => el <= limit)
}
console.log(smallEnough([66, 101], 200))
