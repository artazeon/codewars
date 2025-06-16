const getTurkishNumber = (num) => {
  const dict = {
    0: 'sıfır',
    1: 'bir',
    2: 'iki',
    3: 'üç',
    4: 'dört',
    5: 'beş',
    6: 'altı',
    7: 'yedi',
    8: 'sekiz',
    9: 'dokuz',
    10: 'on',
    20: 'yirmi',
    30: 'otuz',
    40: 'kırk',
    50: 'elli',
    60: 'altmış',
    70: 'yetmiş',
    80: 'seksen',
    90: 'doksan',
  }

  if (num < 10 || num % 10 === 0) {
    return dict[num]
  } else {
    const tens = Math.floor(num / 10) * 10
    const units = num % 10
    return `${dict[tens]} ${dict[units]}`
  }
}

console.log(getTurkishNumber(0))
console.log(getTurkishNumber(16))
console.log(getTurkishNumber(70))
console.log(getTurkishNumber(26))
