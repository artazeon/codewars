function sc(screws) {
  let count = 0

  for (let i = 0; i < screws.length; i++) {
    if (i !== 0 && screws[i] !== screws[i - 1]) {
      count += 5
    }

    count += 2
  }
  return count - 1
}

console.log(sc('---+++'))
