function alphabetWar(fight) {
  const power = {
    w: -4,
    p: -3,
    b: -2,
    s: -1,
    m: 4,
    q: 3,
    d: 2,
    z: 1,
  }

  let result = 0

  for (let i = 0; i < fight.length; i++) {
    if (power[fight[i]]) {
      result += power[fight[i]]
    }
    console.log(result)
  }

  return result === 0
    ? `Let's fight again!`
    : result > 0
    ? `Right side wins!`
    : `Left side wins!`
}

console.log(alphabetWar('mwimsmzaqplum'))
