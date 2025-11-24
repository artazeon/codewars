function starSign(date) {
  const stars = [
    { sign: 'Capricorn', from: 101, to: 120 },
    { sign: 'Aquarius', from: 121, to: 219 },
    { sign: 'Pisces', from: 220, to: 320 },
    { sign: 'Aries', from: 321, to: 420 },
    { sign: 'Taurus', from: 421, to: 521 },
    { sign: 'Gemini', from: 522, to: 621 },
    { sign: 'Cancer', from: 622, to: 722 },
    { sign: 'Leo', from: 723, to: 823 },
    { sign: 'Virgo', from: 824, to: 923 },
    { sign: 'Libra', from: 924, to: 1023 },
    { sign: 'Scorpio', from: 1024, to: 1122 },
    { sign: 'Sagittarius', from: 1123, to: 1221 },
    { sign: 'Capricorn', from: 1222, to: 1231 },
  ]

  const m = date.getMonth() + 1
  const d = date.getDate()
  const mmdd = m * 100 + d

  const result = stars.find((el) => mmdd >= el.from && mmdd <= el.to)

  return result.sign
}

console.log(starSign(new Date(1970, 3, 5)))
console.log(starSign(new Date(1970, 11, 23)))
