function rentalCarCost(d) {
  if (d < 3) {
    return d * 40
  } else if (d < 7) {
    return d * 40 - 20
  } else if (d >= 7) {
    return d * 40 - 50
  }
}
