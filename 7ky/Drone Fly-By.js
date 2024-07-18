function flyBy(lamps, drone) {
  const notFly = lamps.slice(drone.length)
  const haskedLamp = 'o'.repeat(Math.min(drone.length, lamps.length))

  return haskedLamp + notFly
}

console.log(flyBy('xxxxxx', '====T'))
