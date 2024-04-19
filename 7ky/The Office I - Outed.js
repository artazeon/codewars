function outed(meet, boss) {
  let res = 0

  for (const key in meet) {
    if (meet.hasOwnProperty(key)) {
      const value = meet[key]

      if (key === boss) {
        res += value * 2
      } else {
        res += value
      }
    }
  }
  console.log(res / Object.keys(meet).length)
  return res / Object.keys(meet).length > 5
    ? 'Nice Work Champ!'
    : 'Get Out Now!'
}
console.log(
  outed(
    {
      tim: 2,
      jim: 2,
      randy: 6,
      sandy: 4,
      andy: 8,
      katie: 8,
      laura: 6,
      saajid: 5,
      alex: 0,
      john: 6,
      mr: 2,
    },
    'john'
  )
)
