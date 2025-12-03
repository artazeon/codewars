function takeUmbrella(weather, chance) {
  return (
    weather === 'rainy' ||
    (weather === 'cloudy' && chance > 0.2) ||
    (weather === 'sunny' && chance > 0.5)
  )
}

console.log(takeUmbrella('sunny', 0.4), false)
console.log(takeUmbrella('rainy', 0), true)
console.log(takeUmbrella('cloudy', 0.2), false)
console.log(takeUmbrella('cloudy', 0.41), true)
