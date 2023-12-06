function gps(s, x) {
  //console.log(s, x)
  const delta_distance = []

  if (x.length < 1) {
    return 0
  } else {
    for (let i = 0; i < x.length - 1; i++) {
      delta_distance.push(x[i + 1] - x[i])
      
    }
    return Math.floor((3600 * Math.max(...delta_distance)) / s)
  }
}

console.log(
  gps(
    12,
    [0.0, 0.11, 0.22, 0.33, 0.44, 0.65, 1.08, 1.26, 1.68, 1.89, 2.1, 2.31, 2.52, 3.25]
  )
)
