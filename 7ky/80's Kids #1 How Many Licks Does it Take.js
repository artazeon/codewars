function totalLicks(env) {
  let sum = 252
  let maxLicks = 0
  let toughestChallenge = ''

  Object.entries(env).forEach(([challenge, licks]) => {
    sum += licks

    if (licks > maxLicks) {
      maxLicks = licks
      toughestChallenge = challenge
    }
  })

  const challengeStr = toughestChallenge
    ? ` The toughest challenge was ${toughestChallenge}.`
    : ''

  return `It took ${sum} licks to get to the tootsie roll center of a tootsie pop.${challengeStr}`
}

console.log(
  totalLicks({ 'freezing temps': 10, 'clear skies': -2 }),
  'It took 260 licks to get to the tootsie roll center of a tootsie pop. The toughest challenge was freezing temps.',
)
console.log(totalLicks({ dragons: 100, 'evil wizards': 110, trolls: 50 }))
