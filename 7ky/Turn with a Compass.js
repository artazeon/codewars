function direction(facing, turn) {
  const compass = {
    N: 0,
    NE: 45,
    E: 90,
    SE: 135,
    S: 180,
    SW: 225,
    W: 270,
    NW: 315,
  }

  let deg = compass[facing] + turn

  while (deg >= 360 || deg < 0) {
    if (deg >= 360) {
      deg = deg - 360
    }
    if (deg < 0) {
      deg = deg + 360
    }
  }

  return Object.keys(compass).find((key) => compass[key] === deg) || null
}

console.log(direction('S', 180), 'N')
console.log(direction('SE', -45), 'E')
console.log(direction('W', 495), 'NE')
console.log(direction('N', -450), 'W')
