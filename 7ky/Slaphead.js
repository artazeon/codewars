function bald(x) {
  const hairStatus = {
    0: 'Clean!',
    1: 'Unicorn!',
    2: 'Homer!',
    3: 'Careless!',
    4: 'Careless!',
    5: 'Careless!',
    6: 'Hobo!',
  }

  const hairCount = x.split('').filter((el) => el == '/').length
  const hairClean = x.replace(/\//g, '-')

  return hairCount >= 6
    ? [hairClean, `Hobo!`]
    : [hairClean, hairStatus[hairCount]]
}

console.log(bald('/---------'), ['----------', 'Unicorn!'])
console.log(bald('/-----/-'), ['--------', 'Homer!'])
console.log(bald('-/-/---//--//--/'), ['---------------', 'Careless!'])
